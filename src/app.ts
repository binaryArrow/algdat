import {Bars} from "./bars";
import { observable } from 'aurelia-framework';

export class App {
  bars: Bars[] = []
  svgHeight: number
  barWidth // barwidth is relational to howManyBars
  maxValue = 600 // max height of bars
  @observable howManyBars = 10 // using standard convention with the function called has the name with 'changed' in the end EG: howManyBarsChanged()
  functionIsRunning = false
  speed = 90
  running = false

  constructor(){
    this.svgHeight = this.maxValue + 10
    this.createBars()
  }

  createBars(): void {
    this.bars = []
    this.barWidth = 500/this.howManyBars
    // creating bars with random heights
    for(let i=1; i<=this.howManyBars; i++){
      const value: number = Math.floor(Math.random() * this.maxValue + 1)
      const bar = new Bars(value, (i - 1)*this.barWidth+1, this.barWidth, 'fill: rgb(166, 67, 67);' )
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
        }
      }
      this.bars[this.bars.length - 1 - i].style = 'fill: cadetblue;'
      await new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved')
        }, this.speed)
      })
    }
    this.functionIsRunning = false
  }

  async insertionSort(): Promise<void> {
    this.functionIsRunning = true
    let j, key
    for (let i = 1; i < this.bars.length; i++) {
      key = this.bars[i].value
      j = i-1
      while (j >= 0 && this.bars[j].value > key) {
        this.bars[j+1].value = this.bars[j].value
        j = j-1
      }
      this.bars[j+1].value = key
      await new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved')
        }, this.speed)
      })
    }
    this.bars.forEach(it => it.style = 'fill: rgb(153, 102, 153);')
    this.functionIsRunning = false
  }


  cancel(): void {
    this.running = true
  }
  // TODO: insertion-sort

}
