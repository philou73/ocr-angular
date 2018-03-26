import { Component, OnInit } from '@angular/core';
// Ajout de l'import au service Appareil
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

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
  
  constructor(private appareilService : AppareilService,
							private authService : AuthService) { }

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
