# Webcam Dot Grid

This p5.js sketch captures live webcam input and visualises it as a grid of animated dots. The dot sizes react to brightness values, creating a pixelated yet organic representation of the video feed. The sketch maintains the webcam's aspect ratio while adapting to any screen size, and uses a mirrored display for a more intuitive experience.

## Live Demo

[Insert live demo URL here, if hosted online]

## Features

- Live webcam capture using `createCapture(VIDEO)`
- Responsive canvas that fills the browser window
- Aspect ratio preservation based on the actual webcam resolution
- Mirror effect (like a selfie view)
- Dots scale dynamically with brightness, creating a halftone-like effect
- Canvas resizes on window resize events

## Getting Started

1. Clone or download this repository.
2. Open the `index.html` file in your browser.
3. Grant permission to use the webcam when prompted.

> Note: Works best in modern browsers like Chrome or Firefox.

## How It Works

- The webcam is accessed and hidden from direct display.
- The sketch reads pixel brightness (red channel) at intervals.
- Each pixel block is represented as a white dot with size mapped to brightness.
- The display is mirrored horizontally using `scale(-1, 1)` to mimic a reflection.
- The canvas resizes and recalculates layout proportionally to preserve visual coherence.

## Dependencies

- [p5.js](https://p5js.org/) (included via CDN)

## Customisation

- Change `gridSize` to increase or decrease dot density.
- Adjust `targetDia` multiplier (`* 10`) for visual intensity.
- Switch from `r` (red channel) to average RGB or brightness if needed.

## License

MIT License — free to use and adapt.
