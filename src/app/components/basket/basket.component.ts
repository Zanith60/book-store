import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  totalBooksInBasket: number = 0;

  ngOnInit(): void {
    const storedCount = localStorage.getItem('totalBooksInBasket');
    this.totalBooksInBasket = storedCount ? parseInt(storedCount, 10) : 0;
  }

  addToBasket(): void {
    this.totalBooksInBasket++;
    localStorage.setItem('totalBooksInBasket', this.totalBooksInBasket.toString());
  }

  removeFromBasket(): void {
    if (this.totalBooksInBasket > 0) {
      this.totalBooksInBasket--;
      localStorage.setItem('totalBooksInBasket', this.totalBooksInBasket.toString());
    }
  }
}
