# Clean up obsolete PDP4 deck styles
$ErrorActionPreference = "Stop"

$cssPath = "c:\Users\lenovo\Desktop\FH\styles.css"
$rawCss = [System.IO.File]::ReadAllText($cssPath, [System.Text.Encoding]::UTF8)

$oldStartStr = "/* ==========================================================================`r`n   PDP4 ROTATING TESTIMONIALS CARD DECK"
if (-not $rawCss.Contains("PDP4 ROTATING TESTIMONIALS CARD DECK")) {
    $oldStartStr = "PDP4 ROTATING TESTIMONIALS CARD DECK"
}

$oldStartIdx = $rawCss.IndexOf("PDP4 ROTATING TESTIMONIALS CARD DECK")
if ($oldStartIdx -ge 0) {
    # Find preceding comment start
    $cutStart = $rawCss.LastIndexOf("/*", $oldStartIdx)
    $cutEnd = $rawCss.IndexOf("/* ========================================================================`r`n   CATERING WORKFLOW", $oldStartIdx)
    if ($cutEnd -lt 0) {
        $cutEnd = $rawCss.IndexOf("CATERING WORKFLOW: 3D CARD FLIP", $oldStartIdx)
        $cutEnd = $rawCss.LastIndexOf("/*", $cutEnd)
    }

    Write-Host "Cutting obsolete styles from $cutStart to $cutEnd"
    $cleanedCss = $rawCss.Substring(0, $cutStart) + $rawCss.Substring($cutEnd)
    [System.IO.File]::WriteAllText($cssPath, $cleanedCss, [System.Text.Encoding]::UTF8)
    Write-Host "Obsolete PDP4 deck styles removed successfully!"
} else {
    Write-Host "No obsolete styles found."
}

