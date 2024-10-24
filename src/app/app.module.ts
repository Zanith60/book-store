import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListingComponent } from './components/book-listing/book-listing.component';
import { BasketComponent } from './components/basket/basket.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListingComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
