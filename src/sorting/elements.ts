import * as P5 from "p5";

export class Elements {
  p5: P5
  pos: P5.Vector
  size: number

  constructor(p5:P5, atPosition: P5.Vector,size: number ) {
    this.p5 = p5
    this.pos = atPosition
    this.size = size
  }

  draw() {
    const p5 = this.p5
    p5.push()
    p5.translate(this.pos)
    p5.noStroke()
    p5.fill("orange")
    p5.ellipse(0, 0, this.size)

    p5.pop()

  }
}
