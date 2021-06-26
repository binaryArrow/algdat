import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';
import {bootstrap} from "aurelia-bootstrapper";
import {Bars} from "./bars";

export class App {
  private bars: Bars[] = []
  private svgWidth: number
  private svgHeight: number
  barWidth = 50
  maxValue = 600
  howManyBars = 10

  constructor(){
    for(let i=1; i<=this.howManyBars; i++){
      const value: number = Math.floor(Math.random() * this.maxValue + 1)
      const bar = new Bars(value, (i - 1)*this.barWidth, this.barWidth)
      this.bars.push(bar)
    }
    this.svgHeight = this.maxValue + 1
    this.svgWidth = this.barWidth * this.howManyBars + this.barWidth
  }

  createNewBars(): void {
    this.bars.forEach(it => {
      it.value = Math.floor(Math.random() * this.maxValue + 1)
    })
  }

  // TODO: optimize
  bubbleSort(): void {
    for(let i = 0; i < this.bars.length; i++) {
      for(let j = 0; j < this.bars.length - 1; j++) {

        if(this.bars[j].value > this.bars[j + 1].value) {
          const swap = this.bars[j].value;
          this.bars[j].value = this.bars[j + 1].value;
          this.bars[j + 1].value = swap;
        }
      }
    }
  }

  // TODO: center the bar field.implement insertion-sort

}
