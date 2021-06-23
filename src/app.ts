import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';
import {bootstrap} from "aurelia-bootstrapper";
import {Bars} from "./bars";

export class App {
  private bars: Bars[] = []
  private svgWidth: number
  private svgHeight: number
  barWidth = 50

  constructor(){
    const maxValue = 600
    const howManyBars = 10
    for(let i=1; i<=howManyBars; i++){
      const value: number = Math.floor(Math.random() * maxValue + 1)
      const bar = new Bars(value, (i - 1)*this.barWidth, this.barWidth)
      this.bars.push(bar)
    }
    this.svgHeight = maxValue + 1
    this.svgWidth = this.barWidth * howManyBars + this.barWidth
  }

}
