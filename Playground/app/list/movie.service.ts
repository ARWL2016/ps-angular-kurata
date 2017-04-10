import { Injectable } from '@angular/core'; 
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 

@Injectable()

export class MovieService {
  private _movieUrl = `http://www.omdbapi.com/?t=bambi&y=&plot=short&r=json`; 
  constructor(private _http: Http) {}

  getMovie(): Observable<any> {
    return this._http.get(this._movieUrl)
      .do((response) => console.log(response, typeof response))
      .map((response: Response) => <any[]> response.json())
      .do((response) => console.log(response, typeof response)); 
  }
}

