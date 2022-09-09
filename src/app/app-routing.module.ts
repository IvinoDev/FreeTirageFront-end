import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListepostulantComponent } from './listepostulant/listepostulant.component';
import { ListetiresComponent } from './listetires/listetires.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [
// permet de definir url du composant 
{ path:"accueil",
  component:AccueilComponent

},
  // permet de rendre la page d'accueil static sur le site web
  {
    path:"",
    redirectTo:"accueil",
    pathMatch:'full'
  },
  {
    path:"tirage",
    component:TirageComponent
  },
  {
    path:"listetires",
    component:ListetiresComponent

  }, 
  {
    path:"listepostulant",
    component:ListepostulantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
