import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  //On ajoute l'index du compenent récupéré dans la boucle *ngFor pour communiquer avec le service
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }
  
	getStatus() {
		return this.appareilStatus;
	}

	getColor(){
		if (this.appareilStatus === 'éteint') {
			return 'red';
		} else if (this.appareilStatus === 'allumé') {
			return 'green';
		}
	}
	
	// Ajout de la fonction qui modifie le statut d'un appareil
	onSwitch(){
		if (this.appareilStatus === 'éteint') {
			//On appelle le service pour allumer l'appareil
			this.appareilService.switchOnOne(this.index);
		} else if (this.appareilStatus === 'allumé') {
			//On appelle le service pour éteindre l'appareil
			this.appareilService.switchOffOne(this.index);
		}
	}
}
