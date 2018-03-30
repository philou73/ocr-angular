import { Component, OnInit } from '@angular/core';
// Ajout de l'import au service Appareil
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  //On a déporté la déclaration des appareils dans le service AppareilService, on déclare juste ici un tableau de type any
  appareils: any[];
	appareilSubscription: Subscription;

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
		this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
			(appareils: any[]) => {
				this.appareils = appareils;
			}
		);
		this.appareilService.emitAppareilSubject();
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
	
	//Méthode d'enregistrement de tous les appareils vers le serveur
	onSave() {
		this.appareilService.saveAppareilsToServer();
	}
	
	//Méthode de récupération des appareils du serveur
	onGet(){
		this.appareilService.getAppareilsFromServer();
	}
}
