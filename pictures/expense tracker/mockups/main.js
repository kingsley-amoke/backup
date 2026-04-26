async function downloadScreenshot(id) {
  const element = document.getElementById(id);
  const canvas = await html2canvas(element, {
    scale: 3,
    backgroundColor: null,
    width: 360,
    height: 640,
    windowWidth: 360,
    windowHeight: 640,
  });

  const link = document.createElement("a");
  link.download = `${id}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

async function downloadAll() {
  for (let i = 1; i <= 6; i++) {
    await downloadScreenshot(`screenshot${i}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
