import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';
import {bootstrap} from "aurelia-bootstrapper";

export class App {
  private bars: number[] = []

  constructor(){
    for(let i=0; i<=9; i++){
      const temp: number = Math.floor(Math.random()* (Math.floor(10) - (Math.ceil(1)))) + Math.ceil(1)
      this.bars.push(temp)
    }
  }

}
