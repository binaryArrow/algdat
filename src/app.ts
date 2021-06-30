import {Bars} from "./bars";

export class App {
  bars: Bars[] = []
  svgWidth: number
  svgHeight: number
  barWidth = 50
  maxValue = 600
  howManyBars = 10
  unsorted = 'fill: rgb(166, 67, 67)'
  sorted = 'fill: cadetblue'
  functionIsRunning = false
  speed: number
  constructor(){
    // creating bars with random heights
    for(let i=1; i<=this.howManyBars; i++){
      const value: number = Math.floor(Math.random() * this.maxValue + 1)
      const bar = new Bars(value, (i - 1)*this.barWidth+1, this.barWidth, this.unsorted )
      this.bars.push(bar)
    }
    this.svgHeight = this.maxValue + 10
    this.svgWidth = this.barWidth * this.howManyBars + 2
    this.speed = 90
  }

  createNewBars(): void {
    this.bars.forEach(it => {
      it.value = Math.floor(Math.random() * this.maxValue + 1)
      it.style = this.unsorted
    })
  }

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

  reset(){
    this.speed = 90
  }

  // TODO: center the bar field.implement insertion-sort

}
