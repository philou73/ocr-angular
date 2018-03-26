import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { FormsModule } from '@angular/forms';
//Import des sources liés aux Apareils
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
//Import des différents services
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service'
//Import des Routes pour gérer les routes
import { Routes, RouterModule } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

//Création des routes
const appRoutes: Routes = [
	{ path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
	{ path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
	{ path: 'auth', component: AuthComponent},
	{ path: '', component: AppareilViewComponent},
	{ path: 'not-found', component: FourOhFourComponent},
	{ path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
		FormsModule, 
		RouterModule.forRoot(appRoutes)
  ],
  providers: [
		AppareilService,
		AuthService,
		AuthGuard
  ],
  bootstrap: [AppComponent]
})
//enableProdMode();
export class AppModule { }
