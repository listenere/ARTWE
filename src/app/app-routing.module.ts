import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { VocaloidComponent } from './components/vocaloid/vocaloid.component';
import { ArtorComponent } from './components/artor/artor.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
  	path: 'index',
  	component: IndexComponent
  },
  {
  	path: 'vocaloid',
  	component: VocaloidComponent
  },
  {
  	path: 'artor',
  	component:ArtorComponent
  },
  {
  	path: 'shop',
  	component:ShopComponent
  },
  {
  	path: '',
  	redirectTo:'/index',
  	pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
