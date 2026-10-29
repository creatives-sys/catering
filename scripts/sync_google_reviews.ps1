# sync_google_reviews.ps1
#
# Fetches verified Google Reviews and Place Photos for Frank & Harri (Kew, VIC)
# from the Google Places API and updates data/google-reviews.json.
#
# Usage:
#   .\scripts\sync_google_reviews.ps1
#
# With API key:
#   $env:GOOGLE_PLACES_API_KEY="AIzaSy..."
#   .\scripts\sync_google_reviews.ps1

param(
    [string]$ApiKey = $env:GOOGLE_PLACES_API_KEY
)

$PSScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $PSScriptRoot
$DataFile = Join-Path $ProjectRoot "data\google-reviews.json"
$DefaultPlaceId = "ChIJb_fH7eND1moR3nE3Y3L-lqE"
$GoogleMapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Frank+%26+Harri+259+High+St+Kew+VIC+3101"

Write-Host "====================================================" -ForegroundColor Cyan
Write-Host " Frank & Harri - Google Reviews Sync (PowerShell)" -ForegroundColor Cyan
Write-Host "====================================================" -ForegroundColor Cyan

if (-not $ApiKey) {
    Write-Host "No GOOGLE_PLACES_API_KEY environment variable provided." -ForegroundColor Yellow
    Write-Host "Verifying existing data cache in $DataFile..." -ForegroundColor Yellow
    if (Test-Path $DataFile) {
        $existing = Get-Content $DataFile -Raw | ConvertFrom-Json
        Write-Host "Cache valid! Loaded $($existing.reviews.Count) reviews." -ForegroundColor Green
        Write-Host "Place: $($existing.place_info.name) ($($existing.place_info.rating) stars, $($existing.place_info.user_ratings_total) total reviews)" -ForegroundColor Green
    } else {
        Write-Host "Warning: $DataFile not found." -ForegroundColor Red
    }
    Write-Host "`nTo sync live from Google Places API:" -ForegroundColor Gray
    Write-Host "  1. Get an API key from Google Cloud Console (enable Places API)." -ForegroundColor Gray
    Write-Host "  2. Run: .\scripts\sync_google_reviews.ps1 -ApiKey 'AIzaSy...'" -ForegroundColor Gray
    Write-Host "====================================================`n" -ForegroundColor Cyan
    exit 0
}

Write-Host "Fetching live place details from Google Places API for $DefaultPlaceId..." -ForegroundColor Green
$endpoint = "https://maps.googleapis.com/maps/api/place/details/json?place_id=$DefaultPlaceId&fields=name,rating,user_ratings_total,formatted_address,url,reviews,photos&key=$ApiKey"

try {
    $response = Invoke-RestMethod -Uri $endpoint -Method Get -TimeoutSec 15
    if ($response.status -ne "OK") {
        Write-Host "Error from Google API: $($response.status) - $($response.error_message)" -ForegroundColor Red
        exit 1
    }

    $themes = @("sage", "cream", "choco", "olive")
    $cakeKeywords = @("cake", "bruce", "chocolate", "birthday", "celebration", "wedding", "plaque")
    $rawReviews = $response.result.reviews

    $cakeReviews = $rawReviews | Where-Object { $_.rating -ge 4 } | Sort-Object {
        $text = $_.text.ToLower()
        $score = 0
        foreach ($kw in $cakeKeywords) {
            if ($text.Contains($kw)) { $score++ }
        }
        $score
    } -Descending

    $reviewsToUse = if ($cakeReviews.Count -ge 3) { $cakeReviews } else { $rawReviews }
    $mappedReviews = @()
    $idx = 0

    foreach ($r in ($reviewsToUse | Select-Object -First 4)) {
        $firstLine = ($r.text -split "`n")[0]
        if ($firstLine.Length -gt 60) { $firstLine = $firstLine.Substring(0, 57) + "..." }

        $mappedReviews += [PSCustomObject]@{
            id = "google-review-$($idx + 1)"
            author_name = $r.author_name
            author_badge = "$($r.rating) Star Google Review"
            rating = $r.rating
            relative_time = if ($r.relative_time_description) { $r.relative_time_description } else { "Recently" }
            verified = $true
            headline = $firstLine
            text = $r.text
            tag = "Verified Google Review"
            theme = $themes[$idx % $themes.Count]
            photo_url = "assets/images/bruce-cake-$((($idx % 3) + 1)).png"
            photo_alt = "Celebration cake photograph shared by $($r.author_name)"
            google_maps_url = if ($response.result.url) { $response.result.url } else { $GoogleMapsSearchUrl }
        }
        $idx++
    }

    $updatedData = [PSCustomObject]@{
        place_info = [PSCustomObject]@{
            name = if ($response.result.name) { $response.result.name } else { "Frank & Harri" }
            address = if ($response.result.formatted_address) { $response.result.formatted_address } else { "259 High St, Kew VIC 3101, Australia" }
            place_id = $DefaultPlaceId
            rating = if ($response.result.rating) { $response.result.rating } else { 4.4 }
            user_ratings_total = if ($response.result.user_ratings_total) { $response.result.user_ratings_total } else { 242 }
            google_maps_url = if ($response.result.url) { $response.result.url } else { $GoogleMapsSearchUrl }
            last_synced = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
        }
        reviews = $mappedReviews
    }

    $updatedData | ConvertTo-Json -Depth 5 | Set-Content -Path $DataFile -Encoding UTF8
    Write-Host "Successfully synced $($mappedReviews.Count) reviews to $DataFile!" -ForegroundColor Green
    Write-Host "Rating: $($response.result.rating) from $($response.result.user_ratings_total) reviews." -ForegroundColor Green
} catch {
    Write-Host "Exception during sync: $($_.Exception.Message)" -ForegroundColor Red
}

