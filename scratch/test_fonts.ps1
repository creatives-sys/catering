Add-Type -AssemblyName PresentationCore
$fonts = [System.Windows.Media.Fonts]::SystemFontFamilies | ForEach-Object { $_.Source } | Sort-Object
$luxuryFonts = $fonts | Where-Object { $_ -match "Didot|Bodoni|Playfair|Georgia|Century|Futura|Jost|Palatino|Cinzel|Baskerville|Garamond|Montserrat|Franklin|Corbel|Tw Cen" }
Write-Output "Matching fonts on system:"
Write-Output $luxuryFonts

