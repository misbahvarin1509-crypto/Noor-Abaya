# Noor Abaya — Luxury Abaya Fashion Website

A 4-page, fully responsive front-end project built with pure HTML5, CSS3, and vanilla JavaScript — no frameworks.

## Pages
- `index.html` — Home
- `about.html` — About Us
- `products.html` — Products (12 abayas, filterable, with a detail modal)
- `services.html` — Services

## Structure
Each HTML page loads only its own stylesheet (`css/`) and its own script (`js/`), as requested. Because nothing is shared between pages, the base styles/behaviour (variables, navbar, footer, buttons, scroll reveal, back-to-top, etc.) are intentionally duplicated at the top of every CSS/JS file.

## About the images
Product, hero, and team photography now uses a curated set of elegant, modest abaya/hijab portraits sourced from Pexels (images.pexels.com) and Unsplash (images.unsplash.com), chosen to match a decent, premium editorial look. Free stock libraries don't have photography specifically labelled "Pakistani abaya", so these are general modest-fashion portraits rather than Pakistan-specific shoots — swap in your own local photography under an `images/` folder for full authenticity. The built-in JS still swaps in a neutral placeholder automatically if any single photo URL ever goes stale, so nothing shows as a broken image.

## Running it
No build step needed. Open `index.html` in a browser, or serve the folder with any static server:

```
npx serve .
```

## Credits
Photography: Unsplash contributors (via images.unsplash.com), used under the Unsplash License.
