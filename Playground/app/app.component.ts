import { Component } from '@angular/core';
import { ListService } from "./list/list.service";

@Component({
    selector: 'pm-app',
    template: `
    <body style='margin:10px'>
      <h1>{{pageTitle}}</h1>
      <pg-list [listTitle] = 'listComponentTitle'></pg-list>
    </body>
    `, 
    providers: [ListService]
})
export class AppComponent {
  pageTitle: string = 'App Component'; 
  listComponentTitle: string = 'Angular Key Terms'; 
 }
