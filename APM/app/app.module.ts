import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component'; 
import { FormsModule } from '@angular/forms'; 
import { ProductFilterPipe } from './products/product-filter.pipe'; 
import { StarComponent } from './shared/star.component'; 

@NgModule({
  // Angular + 3rd Party: 
  imports: [ 
    BrowserModule,
    FormsModule 
    ],
    // Our Components
  declarations: [ 
    AppComponent, 
    ProductListComponent, 
    StarComponent, 
    ProductFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
