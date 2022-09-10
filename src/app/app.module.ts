import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirageComponent } from './tirage/tirage.component';
import { ListesComponent } from './listes/listes.component';

@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    ListesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
