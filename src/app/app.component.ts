import { Component, OnInit } from '@angular/core'; //On importe "OnInit"
// Ajout de l'import au service Appareil
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { // On a ajouté "implements OnInit" pour implémenter l'interface
  title = 'app';
  isAuth : boolean = false;
  //On a déporté la déclaration des appareils dans le service AppareilService, on déclare juste ici un tableau de type any
  appareils: any[];

  //Création d'une promise pour gérer l'asynchronisme
  lastUpdate = new Promise((resolve, reject) => {
	  const date = new Date();
	  setTimeout(
		() => {
			resolve(date)
		}, 2000
	);
  });
  
  constructor(private appareilService: AppareilService) {
	  setTimeout(
		() => {
			this.isAuth = true;
		}, 4000
	  )
  }
  
  //Création d'un "lifecycle hook"
  ngOnInit() {
	this.appareils = this.appareilService.appareils;
  }
  
	onAllumer() {
		//On appelle le service et sa fonction pour tout allumer
		this.appareilService.switchOnAll();
	}
	
	onEteindre() {
		//On appelle le service et sa fonction pour tout éteindre
		if(confirm("Etes-vous sûr de vouloir tout éteindre ?")){
			this.appareilService.switchOffAll();
		} else {
			return null;
		}
	}
}
