import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';

const routes: Routes = [
  {
    path:"",
    redirectTo : "accueil",
    pathMatch:'full'
  },

  {path: "accueil", 
  component: PageAccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
