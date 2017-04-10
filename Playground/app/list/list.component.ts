import { Component, Input } from '@angular/core'; 

@Component({
  selector: 'pg-list', 
  templateUrl: 'app/list/list.component.html', 
  styleUrls: ['app/list/list.component.css']
})

export class ListComponent {
  @Input() listTitle: string; 
  pageTitle: string;  
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