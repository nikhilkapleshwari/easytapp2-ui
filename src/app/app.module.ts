import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {CardModule} from 'primeng/card';
import {OrderListModule} from 'primeng/orderlist';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    DataViewModule,
    VirtualScrollerModule,
    CardModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
