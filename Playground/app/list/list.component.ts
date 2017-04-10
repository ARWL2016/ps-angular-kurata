import { Component, Input, OnInit } from '@angular/core'; 
import { ListService } from './list.service'; 

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
  angularTerms: string[]; 

  constructor(private _listService: ListService) {} 
  
  ngOnInit(): void {
    this.angularTerms = this._listService.getTerms();
  }

  toggleList(): void {
    this.showList = this.showList ? false : true; 
  }
}