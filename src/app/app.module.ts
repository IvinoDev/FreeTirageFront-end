import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsListeComponent } from './details-liste/details-liste.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import { TirageComponent } from './tirage/tirage.component';
import {MatIconModule} from '@angular/material/icon';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';




@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    DetailsListeComponent,
    DetailsTirageComponent,
    PageAccueilComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
