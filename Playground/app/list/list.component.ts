import { Component } from '@angular/core'; 

@Component({
  selector: 'pg-list', 
  templateUrl: 'app/list/list.component.html'
})

export class ListComponent {
  pageTitle: string = 'List Component';  
  titleColor: string = 'darkblue'; 
  showList: boolean = true; 
  angularTerms: string[] = [
    'directive', 
    'pipe', 
    'interface', 
    'component', 
    'decorator'
  ]; 
  toggleList(): void {
    this.showList = this.showList ? false : true; 
  }
}