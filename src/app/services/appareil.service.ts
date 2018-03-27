import { Subject } from 'rxjs/Subject';

export class AppareilService {
	
	//Le tableau d'appareils sera un Subject pour que les différents éléments puissent interagir proprement avec lui
	appareilSubject = new Subject<any[]>(); //Le Subject gérera des données de type tableau
	
	//On crée un tableau de machines électriques
	private appareils = [
		{ 
			id: 1,
			name: 'Machine à laver', 
			status: 'éteint' 
		},
		{ 
			id: 2,
			name: 'Frigo', 
			status: 'allumé'
		},
		{ 
			id: 3,
			name: 'Chaîne Hifi', 
			status: 'éteint'
		}
	]
	
	// Création d'une méthode d'émission
	emitAppareilSubject(){
		this.appareilSubject.next(this.appareils.slice());
	}
	
	//Création de la méthode qui renvoie l'appareil correspond à l'identifiant passé en paramètre
	getAppareilById(id: number){
		const appareil = this.appareils.find(
			(s) => {
				return s.id === id;
			}
		);
		return appareil;
	}
	
	//Création de la function qui allume tous les appareils
	switchOnAll () {
		for(let appareil of this.appareils){
			appareil.status = 'allumé';
		}
		this.emitAppareilSubject();
	}
	
	//Création de la function qui éteint tous les appareils
	switchOffAll () {
		for(let appareil of this.appareils) {
			appareil.status = 'éteint';
		}
		this.emitAppareilSubject();
	}
	
	//Gestion de l'allumage et de l'éteignage d'un seul appareil
	switchOnOne (i: number) {
		this.appareils[i].status = 'allumé';
		this.emitAppareilSubject();
	}
	switchOffOne(i: number){
		this.appareils[i].status = 'éteint';
		this.emitAppareilSubject();
	}
	
	//Fonction de création d'un nouvel appareil
	addAppareil (name: string, status: string) {
		// On crée un nouvel objet Appareil
		const appareilObject = {
			id: 0,
			name: '',
			status: ''
		};
		// On prend en compte les données transmises
		appareilObject.name = name;
		appareilObject.status = status;
		// On crée la clé en appliquant +1 à la dernière clé
		appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
		
		// On ajoute l'appareil au tableau d'appareils
		this.appareils.push(appareilObject);
		
		// On indique à tous les abonnés qu'une donnée a été modifiée
		this.emitAppareilSubject();
		
	}
}