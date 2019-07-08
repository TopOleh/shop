import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public name: string = 'Shonebud';
  public description: string = 'The best available product';
  public price: number = 25;
  // public category: enum (Создайте enum с несколькими категориями)
  public isAvailable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onBuy(): void {
    console.log('You have bought a product!');
  }

}
