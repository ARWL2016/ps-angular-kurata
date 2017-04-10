import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <pg-list></pg-list>
    </div>
    `
})
export class AppComponent {
  pageTitle: string = 'App Component'
 }
