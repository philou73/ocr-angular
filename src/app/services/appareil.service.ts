export class AppareilService {
	//On crée un tableau de machines électriques
	appareils = [
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
	}
	
	//Création de la function qui éteint tous les appareils
	switchOffAll () {
		for(let appareil of this.appareils) {
			appareil.status = 'éteint';
		}
	}
	
	//Gestion de l'allumage et de l'éteignage d'un seul appareil
	switchOnOne (i: number) {
		this.appareils[i].status = 'allumé';
	}
	switchOffOne(i: number){
		this.appareils[i].status = 'éteint';
	}
}