import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';
import {bootstrap} from "aurelia-bootstrapper";

export class App {
  private bars: number[] = []
  private svgWidth: number
  private svgHeight: number
  barWidth = 50

  constructor(){
    const maxValue = 600
    const howManyBars = 10
    for(let i=1; i<=howManyBars; i++){
      const temp: number = Math.floor(Math.random() * maxValue + 1)
      this.bars.push(temp)
    }
    this.svgHeight = maxValue + 1
    this.svgWidth = this.barWidth * howManyBars
  }

}
