import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  products: Observable<Product>
  //products: Product[]
  fDescription : String

  constructor(private productService: ProductService) { } //inyectando service

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("RELOAD!")
    this.productService.getProductList().subscribe(products => this.products = products);
  }

  procesarClic(){
     this.productService.getProductListDescription(this.fDescription).subscribe(products => this.products = products);
  }

}
