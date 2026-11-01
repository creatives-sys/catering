$content = Get-Content -Raw "index-2.html"
$divOpen = ([regex]::Matches($content, "<div[\s>]")).Count
$divClose = ([regex]::Matches($content, "</div>")).Count
$secOpen = ([regex]::Matches($content, "<section[\s>]")).Count
$secClose = ([regex]::Matches($content, "</section>")).Count

Write-Output "Divs: $divOpen open, $divClose close"
Write-Output "Sections: $secOpen open, $secClose close"

