import * as P5 from "p5"
import {Elements} from "./elements";

export class InsertionSort {
  private heading = "insertion-sort"
  private elements: Elements
  private values = new Array<number>(720)

  attached() {
    const sketch = s => {
      s.setup = () => {
        const canvas = s.createCanvas(720, 500)
        canvas.parent("sketch-holder")
        s.background(200)

        // for (let i = 1; i < 4; i++) {
        //   const p = s.width / 4;
        //   const circlePos = s.createVector(p * i, s.height / 2);
        //   const size = i % 2 !== 0 ? 24 : 32;
        //   this.elements.push(new Elements(s, circlePos, size));
        // }
        for(let i = 0; i < s.width; i++){
          this.values[i] = Math.floor(Math.random() * s.height)
        }
        this.elements = new Elements(s, this.values)
      }

      s.draw = () => {
       this.elements.draw()
      }
    }
      new P5(sketch)
  }

  insertionSort(a: number[]): number[] {
    for(let i = 1; i <= a.length; i++) {
      const key = a[i]
      let j = i
      while ((j > 0) && (a[j - 1] > key)) {
        a[j] = a[j - 1]
        j = j - 1
      }
      a[j] = key
    }
    return a
  }

}

