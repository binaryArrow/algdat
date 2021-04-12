import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';
import {bootstrap} from "aurelia-bootstrapper";

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
    config.title = 'AlgDat';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'Home',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
        title: 'Home'
      },
      {
        route: 'binary-sort',
        name: 'binary-sort',
        moduleId: PLATFORM.moduleName('./sorting/binary-sort'),
        nav: true,
        title: 'binary-sort'
      },
      {
        route: 'quick-sort',
        name: 'quicksort',
        moduleId: PLATFORM.moduleName('./sorting/quick-sort'),
        nav: true,
        title: 'quick-sort'
      }
    ]);

    this.router = router;
  }
}
