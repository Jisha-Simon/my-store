import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { NgIf } from '@angular/common';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  myForm: FormGroup;
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.myForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)]),
      image: new FormControl(''),
      is_available: new FormControl('')
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
    this.productService.addProduct(this.myForm.value);
    } else {
      alert ('please enter valid input');
    }
  }
}
