import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsListeComponent } from './details-liste/details-liste.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
<<<<<<< HEAD
import { TirageComponent } from './tirage/tirage.component';
import {MatIconModule} from '@angular/material/icon';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
>>>>>>> a80a28433a2d4fccc3e33e3dbb82ffe49b52d8d0




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
<<<<<<< HEAD
    FormsModule,
    MatIconModule
=======
    BrowserAnimationsModule,
    MatIconModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
>>>>>>> a80a28433a2d4fccc3e33e3dbb82ffe49b52d8d0
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
