import { ProdukModule } from './produk/produk.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path :'profiles',
    component : ProfileComponent
  },
  {
    path : 'produk',
    loadChildren : () => ProdukModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
