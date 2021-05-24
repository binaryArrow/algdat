import * as P5 from "p5";

export class Elements {
  p5: P5
  values: number[]

  constructor(p5:P5, values: number[] ) {
    this.p5 = p5
    this.values = values
  }

  draw() {
    this.drawBars()
  }


  drawBars() {
    for ( let i = 0; i < this.values.length; i++) {
      const p5 = this.p5
      p5.stroke(100, 143, 143)
      p5.fill(40)
      p5.rect(i * 8, p5.height, 8, -this.values[i], 20)
    }
  }

}
