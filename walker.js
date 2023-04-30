class Walker {
  constructor(type) {
    this.type = type;
    this.x = int(random(30, width - 31));
    this.y = int(random(30, height - 31));
  }

  render() {
    // if (this.type === "🪨") {
    //   fill(155);
    // } else if (this.type === "📄") {
    //   fill(255);
    // } else if (this.type === "✂️") {
    //   fill(255, 0, 0);
    // }

    // rect(this.x, this.y, 30);
    stroke(0);
    textSize(30);
    text(this.type, this.x - 5, this.y + 30 - 5);
  }

  collision() {
    walkerList.forEach((element) => {
      let x1 = element.x - 15;
      let x2 = this.x - 15;
      let y1 = element.y - 15;
      let y2 = this.y - 15;
      let h = 30;
      let w = 30;
      // Checks if walker collides with itself
      if (x1 == x2 && y1 === y2) {
        return;
      }
      // Checks if walker collides with other walker
      if (x1 < x2 + w && x1 + w > x2 && y1 < y2 + h && h + y1 > y2) {
        if (this.type === element.type) {
          return;
        }
        if (this.type === "🪨" && element.type === "📄") {
          this.type = "📄";
        } else if (this.type === "📄" && element.type === "✂️") {
          this.type = "✂️";
        } else if (this.type === "✂️" && element.type === "🪨") {
          this.type = "🪨";
        } else if (this.type === "🪨" && element.type === "✂️") {
          element.type = "🪨";
        } else if (this.type === "📄" && element.type === "🪨") {
          element.type = "📄";
        } else if (this.type === "✂️" && element.type === "📄") {
          element.type = "✂️";
        } else {
          console.log(error);
        }
      }
    });
  }

  step() {
    let choice = int(random(0, 8));
    // console.log(choice);
    let randomStep = int(random(1, 3));
    switch (choice) {
      case 0: {
        this.x += randomStep;
        break;
      }
      case 1: {
        this.x -= randomStep;
        break;
      }
      case 2: {
        this.y += randomStep;
        break;
      }
      case 3: {
        this.y -= randomStep;
        break;
      }
      case 4: {
        this.x += randomStep;
        this.y -= randomStep;
        break;
      }
      case 5: {
        this.x -= randomStep;
        this.y -= randomStep;
        break;
      }
      case 6: {
        this.x -= randomStep;
        this.y += randomStep;
        break;
      }
      case 7: {
        this.x += randomStep;
        this.y += randomStep;
        break;
      }
    }
    this.x = constrain(this.x, 30, width - 30);
    this.y = constrain(this.y, 30, height - 30);
  }
}
