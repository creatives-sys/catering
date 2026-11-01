Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName PresentationFramework
Add-Type -AssemblyName WindowsBase

function Create-TextPathSvg {
    param(
        [string]$Text,
        [string]$FontFamily,
        [System.Windows.FontWeight]$FontWeight,
        [double]$FontSize,
        [double]$TrackingRatio, # extra spacing relative to fontSize
        [string]$OutputPath,
        [double]$TargetHeight = 44.0,
        [double]$PaddingX = 20.0
    )

    $typeface = New-Object System.Windows.Media.Typeface(
        (New-Object System.Windows.Media.FontFamily($FontFamily)),
        [System.Windows.FontStyles]::Normal,
        $FontWeight,
        [System.Windows.FontStretches]::Normal
    )

    $group = New-Object System.Windows.Media.GeometryGroup

    # Layout character by character with tracking
    $curX = 0.0
    for ($i = 0; $i -lt $Text.Length; $i++) {
        $ch = $Text.Substring($i, 1)
        if ($ch -eq ' ') {
            $curX += $FontSize * 0.45 + ($FontSize * $TrackingRatio)
            continue
        }
        $ft = New-Object System.Windows.Media.FormattedText(
            $ch,
            [System.Globalization.CultureInfo]::InvariantCulture,
            [System.Windows.FlowDirection]::LeftToRight,
            $typeface,
            $FontSize,
            [System.Windows.Media.Brushes]::Black,
            1.25
        )
        $charGeom = $ft.BuildGeometry((New-Object System.Windows.Point($curX, 0)))
        $group.Children.Add($charGeom)
        $curX += $ft.WidthIncludingTrailingWhitespace + ($FontSize * $TrackingRatio)
    }

    $pg = [System.Windows.Media.PathGeometry]::CreateFromGeometry($group)
    $bounds = $pg.Bounds

    # Clean path string: remove F0/F1
    $rawPath = $pg.ToString()
    $svgPath = $rawPath -replace '^F[01]', ''

    # Viewbox dimensions
    $minX = [Math]::Floor($bounds.X - $PaddingX)
    $minY = [Math]::Floor($bounds.Y - 6)
    $width = [Math]::Ceiling($bounds.Width + ($PaddingX * 2))
    $height = [Math]::Ceiling($bounds.Height + 12)

    $svgContent = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="$minX $minY $width $height" width="$width" height="$height" fill="currentColor">
  <path d="$svgPath" fill-rule="evenodd" />
</svg>
"@

    [System.IO.File]::WriteAllText($OutputPath, $svgContent, [System.Text.Encoding]::UTF8)
    Write-Output "Generated $OutputPath : ${width}x${height}, bounds: $($bounds.ToString())"
}

# 1. WITCHERY
Create-TextPathSvg -Text "WITCHERY" -FontFamily "Arial" -FontWeight ([System.Windows.FontWeights]::Bold) -FontSize 26 -TrackingRatio 0.38 -OutputPath "assets\images\brands\witchery.svg"

# 2. COUNTRY ROAD
Create-TextPathSvg -Text "COUNTRY ROAD" -FontFamily "Georgia" -FontWeight ([System.Windows.FontWeights]::SemiBold) -FontSize 24 -TrackingRatio 0.28 -OutputPath "assets\images\brands\country-road.svg"

# 3. MECCA COSMETICA (Stacked)
function Create-MeccaSvg {
    param([string]$OutputPath)
    $tfBold = New-Object System.Windows.Media.Typeface((New-Object System.Windows.Media.FontFamily("Arial")), [System.Windows.FontStyles]::Normal, [System.Windows.FontWeights]::Black, [System.Windows.FontStretches]::Normal)
    $tfLight = New-Object System.Windows.Media.Typeface((New-Object System.Windows.Media.FontFamily("Arial")), [System.Windows.FontStyles]::Normal, [System.Windows.FontWeights]::SemiBold, [System.Windows.FontStretches]::Normal)

    $group = New-Object System.Windows.Media.GeometryGroup

    # MECCA
    $text1 = "MECCA"
    $size1 = 28.0
    $curX = 0.0
    for ($i = 0; $i -lt $text1.Length; $i++) {
        $ch = $text1.Substring($i, 1)
        $ft = New-Object System.Windows.Media.FormattedText($ch, [System.Globalization.CultureInfo]::InvariantCulture, [System.Windows.FlowDirection]::LeftToRight, $tfBold, $size1, [System.Windows.Media.Brushes]::Black, 1.25)
        $group.Children.Add($ft.BuildGeometry((New-Object System.Windows.Point($curX, 0))))
        $curX += $ft.WidthIncludingTrailingWhitespace + ($size1 * 0.26)
    }
    $width1 = $curX - ($size1 * 0.26)

    # COSMETICA
    $text2 = "COSMETICA"
    $size2 = 9.5
    $tracking2 = 0.58
    # measure total width of COSMETICA to center it
    $tot2 = 0.0
    for ($i = 0; $i -lt $text2.Length; $i++) {
        $ch = $text2.Substring($i, 1)
        $ft = New-Object System.Windows.Media.FormattedText($ch, [System.Globalization.CultureInfo]::InvariantCulture, [System.Windows.FlowDirection]::LeftToRight, $tfLight, $size2, [System.Windows.Media.Brushes]::Black, 1.25)
        $tot2 += $ft.WidthIncludingTrailingWhitespace + ($size2 * $tracking2)
    }
    $tot2 -= ($size2 * $tracking2)
    $startX2 = ($width1 - $tot2) / 2.0

    $curX2 = $startX2
    for ($i = 0; $i -lt $text2.Length; $i++) {
        $ch = $text2.Substring($i, 1)
        $ft = New-Object System.Windows.Media.FormattedText($ch, [System.Globalization.CultureInfo]::InvariantCulture, [System.Windows.FlowDirection]::LeftToRight, $tfLight, $size2, [System.Windows.Media.Brushes]::Black, 1.25)
        $group.Children.Add($ft.BuildGeometry((New-Object System.Windows.Point($curX2, 33))))
        $curX2 += $ft.WidthIncludingTrailingWhitespace + ($size2 * $tracking2)
    }

    $pg = [System.Windows.Media.PathGeometry]::CreateFromGeometry($group)
    $bounds = $pg.Bounds
    $rawPath = $pg.ToString() -replace '^F[01]', ''

    $minX = [Math]::Floor($bounds.X - 16)
    $minY = [Math]::Floor($bounds.Y - 6)
    $width = [Math]::Ceiling($bounds.Width + 32)
    $height = [Math]::Ceiling($bounds.Height + 12)

    $svgContent = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="$minX $minY $width $height" width="$width" height="$height" fill="currentColor">
  <path d="$rawPath" fill-rule="evenodd" />
</svg>
"@
    [System.IO.File]::WriteAllText($OutputPath, $svgContent, [System.Text.Encoding]::UTF8)
    Write-Output "Generated $OutputPath : ${width}x${height}, bounds: $($bounds.ToString())"
}

Create-MeccaSvg -OutputPath "assets\images\brands\mecca-cosmetica.svg"

