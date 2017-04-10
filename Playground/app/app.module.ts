import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule 
   ],
  declarations: [ 
    AppComponent, 
    ListComponent  
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
