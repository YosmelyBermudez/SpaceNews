import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { FilterComponent } from './filter/filter.component';
import { NotsearchComponent } from './notsearch/notsearch.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"alta",component:RegisterComponent},
  {path:"ingresar",component:LoginComponent},
  {path:"articulo/:id",component:DetailComponent},
  {path:"filter/:title",component:FilterComponent},
  {path:"searchnotfound",component:NotsearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
