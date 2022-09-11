import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { TirageComponent } from './tirage/tirage.component';


const routes: Routes = [
  {
    path:"",
    redirectTo : "accueil",
    pathMatch:'full'
  },

  {path: "accueil", 
  component: PageAccueilComponent},

  {
    path:"",
    redirectTo : "tirage",
    pathMatch:'full'
  },

   {path: "tirage", 
  component: TirageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
