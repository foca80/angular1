import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
     console.log(this.product);
     this.productService.createProduct(this.product).subscribe(
       data => this.router.navigate(['/list'])
     );

  }

}
