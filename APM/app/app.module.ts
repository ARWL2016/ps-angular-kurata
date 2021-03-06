import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
import { RouterModule } from '@angular/router'; 

import { AppComponent }  from './app.component';
import { WelcomeComponent } from "./home/welcome.component";
import { ProductModule } from './products/product.module';


@NgModule({
  // Angular + 3rd Party: 
  imports: [ 
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } 
    ]), 
    ProductModule
    ],
    // Our Components
  declarations: [ 
    AppComponent, 
    WelcomeComponent
     ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
