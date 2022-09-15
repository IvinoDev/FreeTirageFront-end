import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailsListeComponent } from './details-liste/details-liste.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';



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
  component: TirageComponent},

  {
    path:"",
    redirectTo : "detailsliste",
    pathMatch:'full'
  },

  {path: "detailsliste", 
  component: DetailsListeComponent},

   {
    path:"",
    redirectTo : "detailstirage",
    pathMatch:'full'
  },

  {path: "detailstirage", 
  component: DetailsTirageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
