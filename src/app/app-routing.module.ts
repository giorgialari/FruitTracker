import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitDetailsComponent } from './fruits/fruit-details/fruit-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'fruit-details/:id', component: FruitDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
