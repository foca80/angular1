import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; //importar a mano / ojo
import { Observable } from 'rxjs';
import { Product } from './model/product';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'}); //definir a mano
  //inyectar http, también importarlo en app.module.ts
  constructor(private http: HttpClient) { }

  createProduct(product:Object) : Observable<Object>{
    return this.http.post(this.urlBase+'/producto', product, {headers:this.httpHeaders});//enviando el product a REST
  }

  getProductList(): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase+ "/productos");
    return this.http.get(this.urlBase+ '/productos').pipe(
       map(response => response as Product[])
    );   

  }

  getProductListDescription(description: String) : Observable<any>{
    console.log("Llamando a REST:"+ this.urlBase+"/productos/"+description);
    return this.http.get(this.urlBase+"/productos/"+description).pipe(
      map(response => response as Product[])
    );
  }
}
