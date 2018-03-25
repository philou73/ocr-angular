import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { FormsModule } from '@angular/forms';
//Import des sources li�s aux Apareils
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
//Import des diff�rents services
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
//Import des Routes pour g�rer les routes
import { Routes, RouterModule } from '@angular/router';

//Cr�ation des routes
const appRoutes: Routes = [
	{ path: 'appareils', component: AppareilViewComponent},
	{ path: 'auth', component: AuthComponent},
	{ path: '', component: AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
		FormsModule, 
		RouterModule.forRoot(appRoutes)
  ],
  providers: [
		AppareilService,
		AuthService
  ],
  bootstrap: [AppComponent]
})
//enableProdMode();
export class AppModule { }
