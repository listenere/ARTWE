import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { VocaloidComponent } from './components/vocaloid/vocaloid.component';
import { ArtorComponent } from './components/artor/artor.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    VocaloidComponent,
    ArtorComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
