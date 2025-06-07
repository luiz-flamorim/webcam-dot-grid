let video, w, h;
let gridSize = 25;
let myCanvas = document.querySelector("#webcam");
let videoAspect = 16 / 9;

function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  let c = createCanvas(w, h);
  c.parent(myCanvas);

  video = createCapture(VIDEO, () => {
    const actualW = video.elt.videoWidth;
    const actualH = video.elt.videoHeight;

    if (actualW && actualH) {
      videoAspect = actualW / actualH;
    }
  });

  video.hide();
}
function draw() {
  background(0);
  video.loadPixels();

  if (width / height > videoAspect) {
    videoW = width;
    videoH = width / videoAspect;
  } else {
    videoH = height;
    videoW = height * videoAspect;
  }

  let offsetX = (width - videoW) / 2;
  let offsetY = (height - videoH) / 2;

  // Mirror and move origin to top-left corner of video
  translate(width, 0);
  scale(-1, 1);
  translate(offsetX, offsetY);

  let stepX = gridSize * (video.width / videoW);
  let stepY = gridSize * (video.height / videoH);

  for (let y = 0; y < video.height; y += stepY) {
    for (let x = 0; x < video.width; x += stepX) {
      const pixelIndex = (int(x) + int(y) * video.width) * 4;
      let r = video.pixels[pixelIndex];

      const targetDia = map(r, 255, 0, gridSize, 1) * 10;
      let currentDia = 0.2;
      const deltaDia = targetDia - currentDia;
      currentDia += deltaDia * 0.05;

      fill(255);
      noStroke();
      circle(
        x * (videoW / video.width) + gridSize / 2,
        y * (videoH / video.height) + gridSize / 2,
        currentDia
      );
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
