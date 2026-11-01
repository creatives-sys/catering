Add-Type -AssemblyName PresentationCore
Add-Type -AssemblyName PresentationFramework
Add-Type -AssemblyName WindowsBase

$typeface = New-Object System.Windows.Media.Typeface("Arial")
$ft = New-Object System.Windows.Media.FormattedText(
    "WITCHERY",
    [System.Globalization.CultureInfo]::InvariantCulture,
    [System.Windows.FlowDirection]::LeftToRight,
    $typeface,
    24.0,
    [System.Windows.Media.Brushes]::Black,
    1.25
)
$geom = $ft.BuildGeometry((New-Object System.Windows.Point(0, 0)))
$pg = [System.Windows.Media.PathGeometry]::CreateFromGeometry($geom)
$pathStr = $pg.ToString()
Write-Output "Path length: $($pathStr.Length)"
Write-Output "Sample: $($pathStr.Substring(0, [Math]::Min(150, $pathStr.Length)))"
