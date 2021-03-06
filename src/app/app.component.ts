import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <!--Header-->
    <app-header></app-header>

    <app-home></app-home>
    <!--Routes get injected here-->
    <router-outlet></router-outlet>

    <!--Footer-->
    <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'planit-workout';
}
