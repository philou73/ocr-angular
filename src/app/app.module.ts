import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { FormsModule } from '@angular/forms';
//Import des sources liés aux Apareils
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';

// La ligne suivante permet de passer en mode production
//import { enableProdMode } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [
	AppareilService
  ],
  bootstrap: [AppComponent]
})
//enableProdMode();
export class AppModule { }
