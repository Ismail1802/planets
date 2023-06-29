function useStar() {
  const STAR_COLOR = "#fff";
  const STAR_SIZE = 3;
  const STAR_MIN_SCALE = 0.2;
  const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

  const canvas = document.querySelector("canvas");
  context = canvas.getContext("2d");

  let scale = 1, // device pixel ratio
    width,
    height;

  let stars = [];

  let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

  generate();
  resize();
  step();

  window.onresize = resize;

  function generate() {
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: 0,
        y: 0,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
      });
    }
  }

  function placeStar(star) {
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  }

  function resize() {
    scale = window.devicePixelRatio || 1;

    width = window.innerWidth * scale;
    height = window.innerHeight * scale;

    canvas.width = width;
    canvas.height = height;

    stars.forEach(placeStar);
  }

  function step() {
    context.clearRect(0, 0, width, height);

    update();
    render();

    requestAnimationFrame(step);
  }

  function update() {
    velocity.tx *= 0.96;
    velocity.ty *= 0.96;

    velocity.x += (velocity.tx - velocity.x) * 0.8;
    velocity.y += (velocity.ty - velocity.y) * 0.8;

    stars.forEach((star) => {
      star.x += velocity.x * star.z;
      star.y += velocity.y * star.z;

      star.x += (star.x - width / 2) * velocity.z * star.z;
      star.y += (star.y - height / 2) * velocity.z * star.z;
      star.z += velocity.z;

      // recycle when out of bounds
    });
  }

  function render() {
    stars.forEach((star) => {
      context.beginPath();
      context.lineCap = "round";
      context.lineWidth = STAR_SIZE * star.z * scale;
      context.globalAlpha = 0.5 + 0.5 * Math.random();
      context.strokeStyle = STAR_COLOR;

      context.beginPath();
      context.moveTo(star.x, star.y);

      var tailX = velocity.x * 2,
        tailY = velocity.y * 2;

      // stroke() wont work on an invisible line
      if (Math.abs(tailX) < 0.1) tailX = 0.5;
      if (Math.abs(tailY) < 0.1) tailY = 0.5;

      context.lineTo(star.x + tailX, star.y + tailY);

      context.stroke();
    });
  }
}
useStar();
