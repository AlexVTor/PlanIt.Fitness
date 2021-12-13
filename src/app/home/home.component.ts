import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-primary is-bold is-fullheight">
  <div class="hero-body">
  <div class = "container has-text-centered">
    <p class="title">
      Home Page
    </p>

  </div>  
  </div>
</section>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
