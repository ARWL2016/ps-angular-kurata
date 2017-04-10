import { Component, Input, OnInit, DoCheck } from '@angular/core'; 
import { ListService } from './list.service'; 
import { MovieService } from './movie.service'; 

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
  movie: any; 

  constructor(
    private _movieService: MovieService,
    private _listService: ListService 
    ) {} 
  
  ngOnInit(): void {
    this._movieService.getMovie()
      .subscribe(movie => this.movie = movie)
      .then()
    this.angularTerms = this._listService.getTerms();
  }

  toggleList(): void {
    this.showList = this.showList ? false : true; 
  }
}