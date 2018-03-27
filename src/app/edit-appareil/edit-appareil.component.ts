import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {
	
	// On crée un état par défaut
	const defaultOnOff: string = 'éteint';

  constructor(private appareilService: AppareilService
							private router: Router) { }

  ngOnInit() {
  }
	
	onSubmit(form: NgForm){
		//On récupère les valeurs saisies pour les envoyer au service appareilService
		const name = form.value['name'];
		const status = form.value['status'];
		
		// On crée le nouvel appareil
		this.appareilService.addAppareil(name, status);
		
		// On navigue vers la liste des appareils mise à jour
		this.router.navigate(['/appareils']);
	}

}
