window.onload = () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  // translating to show the sine wave in center of the screen
  context.translate(0, height / 2);
  // switching the y axis as in computer science the coordinate systems are opposite
  context.scale(1, -1);

  for (let angle = 0; angle < Math.PI * 2; angle += .01) {
    const x = angle * 200,
          y = Math.sin(angle) * 200;
    context.fillRect(x, y, 5, 5);
  }
};
