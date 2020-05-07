import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchProductComponent } from './search-product/search-product.component';
//para llamar a REST
import { HttpClientModule } from '@angular/common/http';
import {FormsModule}  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductoListComponent,
    ProductDetailsComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
