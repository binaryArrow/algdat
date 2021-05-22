import * as P5 from "p5"
import {Elements} from "./elements";

export class InsertionSort {
  private elements: Elements[] = []

  attached() {
    const sketch = s => {
      s.setup = () => {
        const canvas = s.createCanvas(200, 200)
        canvas.parent("sketch-holder")
        s.background("white")

        for (let i = 1; i < 4; i++) {
          const p = s.width / 4;
          const circlePos = s.createVector(p * i, s.height / 2);
          const size = i % 2 !== 0 ? 24 : 32;
          this.elements.push(new Elements(s, circlePos, size));
        }
      }

      s.draw = () => {
        this.elements.forEach(element => element.draw())
      }
    }
    console.log(sketch)
      new P5(sketch)
  }

}

