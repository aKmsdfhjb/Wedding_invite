# Nepali Wedding Invitation — Nayana & Saugat

A responsive, interactive Nepali wedding invitation page featuring Devanagari typography, a traditional maroon-and-gold palette, image sections, an invitation entry screen and background music.

![Frontend](https://img.shields.io/badge/Frontend-HTML%20%2F%20CSS%20%2F%20JS-171715?style=flat-square)
![Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-c34b2e?style=flat-square)

## Live invitation

[Open the wedding invitation](https://aKmsdfhjb.github.io/Wedding_invite/)

## Features

- Nepali-language invitation content and Devanagari typography.
- Responsive layout for mobile and desktop.
- Traditional maroon, cream and gold styling.
- Image assets and decorative SVG artwork.
- Invitation entry interaction and optional background audio.

## Page flow

~~~mermaid
flowchart TD
 A[Open invitation URL] --> B[Welcome overlay]
 B --> C[Enter invitation]
 C --> D[Wedding details and family message]
 D --> E[Photo and decorative sections]
 E --> F[Optional background music]
~~~

## Run locally

Open index.html in a modern browser. Keep the images directory and music.mp3 beside the HTML file so relative asset paths continue to work.

## Project structure

- index.html — main invitation page.
- src/INDEX.html — alternate source page.
- src/main.js and src/style.css — supporting frontend files.
- images/ — invitation artwork and photographs.
- music.mp3 — background audio asset.
- .github/workflows/pages.yml — GitHub Pages deployment.

## Customization

Update the invitation text and event details in index.html. Replace images only with approved photographs and ensure you have permission to publish them. Browser autoplay policies may require visitors to start audio manually.

## License and privacy

Confirm permission for all photographs, music and decorative assets before public redistribution.


## Project Wiki

- [Wiki home](docs/wiki/Home.md)
- [Architecture and deployment](docs/wiki/Architecture.md)

The repository keeps a version-controlled wiki source under `docs/wiki/`.
