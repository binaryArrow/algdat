import * as P5 from "p5"
import {Elements} from "./elements";

export class InsertionSort {
  private heading = "insertion-sort"
  private elements: Elements

  attached() {
    const sketch = s => {
      let values = new Array<number>(740)
      s.setup = () => {
        const canvas = s.createCanvas(740, 500)
        canvas.parent("sketch-holder")
        s.background("grey")

        // for (let i = 1; i < 4; i++) {
        //   const p = s.width / 4;
        //   const circlePos = s.createVector(p * i, s.height / 2);
        //   const size = i % 2 !== 0 ? 24 : 32;
        //   this.elements.push(new Elements(s, circlePos, size));
        // }
        for(let i = 0; i < values.length; i++){
          values[i] = Math.floor(Math.random() * 500)
        }
        this.elements = new Elements(s, values)
      }

      s.draw = () => {
        for ( let i = 0; i < values.length; i++) {
          this.elements.draw(i)
        }
      }
    }
    console.log(sketch)
      new P5(sketch)
  }
}

