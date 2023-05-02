let w;
let looping = true;
const walkerList = [];
function setup() {
  createCanvas(550, 550);
  // frameRate(10);
  for (let i = 1; i <= 100; i++) {
    if (i >= 1 && i <= 33) {
      walkerList.push(new Walker("🪨"));
    } else if (i >= 34 && i <= 66) {
      walkerList.push(new Walker("📄"));
      // 🗒️ 📄 🧻
    } else if (i >= 66 && i <= 100) {
      walkerList.push(new Walker("✂️"));
    }
  }
  background(255);
}

function draw() {
  background(255);
  line(0, 0, width, 0);
  line(width, 0, width, height);
  line(width, height, 0, height);
  line(0, height, 0, 0);

  walkerList.forEach((element) => {
    setTimeout(renderObject(element), 10000);
  });

  if (
    walkerList.every((x) => x.type === "🪨") ||
    walkerList.every((x) => x.type === "📄") ||
    walkerList.every((x) => x.type === "✂️")
  ) {
    const result = walkerList.every((x) => x.type === "🪨")
      ? "🪨"
      : walkerList.every((x) => x.type === "📄")
      ? "📄"
      : walkerList.every((x) => x.type === "✂️")
      ? "✂️"
      : "No winner";
    document.getElementById("result").innerHTML = `Winner is: ${result}`;
    looping = false;
    walkerList.forEach((element) => {
      setTimeout(renderObject(element), 10000);
    });
    noLoop();
  }
}

function renderObject(object) {
  if (looping) {
    object.step();
    object.collision();
  }
  object.render();
}
