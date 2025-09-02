# Color Palette with Slider

A modern web app that demonstrates dynamic color palette manipulation using color pickers and a slider, with real-time visual feedback on an image. Built with HTML, CSS, and JavaScript.

## Features
- **Live Color Palette:** Pick two colors; the complementary color is automatically calculated and updated.
- **Interactive Slider:** Adjusts a mask effect on the image, changing the visible portion dynamically.
- **SVG Filter Effects:** Uses advanced SVG filters and CSS custom properties for unique color blending and masking.
- **Responsive Design:** Works well on desktop and mobile devices.

## How It Works
- The two color pickers (`--c0` and `--c1`) let you select a base color and its complement.
- The slider (`--p`) controls the mask position on the image.
- All changes are reflected instantly using CSS variables and JavaScript.

## Usage
1. Open `index.html` in your browser.
2. Use the color pickers to select your palette.
3. Move the slider to adjust the image mask.

## File Structure
- `index.html` — Main HTML file with SVG filter, image, slider, and color pickers.
- `style.css` — Styles for layout, palette, slider, and filter effects.
- `script.js` — Handles color conversion, palette updates, and slider events.

## Customization
- Change the image by editing the `<img src=...>` in `index.html`.
- Adjust default colors or slider range as needed.

## License
MIT License. Free to use and modify.
