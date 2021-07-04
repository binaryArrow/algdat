import {Bars} from "./bars";
import { observable } from 'aurelia-framework';

export class App {
  bars: Bars[] = []
  svgHeight: number
  barWidth // barwidth is relational to howManyBars
  maxValue = 600 // max height of bars
  @observable howManyBars = 10 // using standard convention with the function called has the name with 'changed' in the end EG: howManyBarsChanged()
  unsorted = 'fill: rgb(166, 67, 67)'
  sorted = 'fill: cadetblue'
  functionIsRunning = false
  speed: number

  constructor(){
    this.svgHeight = this.maxValue + 10
    this.createBars()
    // this.svgWidth = this.barWidth * this.howManyBars + 2
  }

  createBars(): void {
    this.bars = []
    this.barWidth = 500/this.howManyBars
    // creating bars with random heights
    for(let i=1; i<=this.howManyBars; i++){
      const value: number = Math.floor(Math.random() * this.maxValue + 1)
      const bar = new Bars(value, (i - 1)*this.barWidth+1, this.barWidth, this.unsorted )
      this.bars.push(bar)
    }
  }

  howManyBarsChanged(): void{
    this.createBars()
  }
  speedReset(): void{
    this.speed = 90
  }
  barReset(): void{
    this.howManyBars = 10
  }

  // ALGORITHMS------------------------------------------------------------------

  async bubbleSort(): Promise<void> {
    this.functionIsRunning = true
    for(let i = 0; i < this.bars.length; i++) {
      for(let j = 0; j < this.bars.length - 1; j++) {
        if(this.bars[j].value > this.bars[j + 1].value) {
          const swap = this.bars[j].value;
          this.bars[j].value = this.bars[j + 1].value;
          this.bars[j + 1].value = swap;
          await new Promise(resolve => {
            setTimeout(() => {
              resolve('resolved')
            }, this.speed)
          })
        }
      }
      this.bars[this.bars.length - 1 - i].style = this.sorted
    }
    this.functionIsRunning = false
  }

  // TODO: center the bar field.implement insertion-sort

}
