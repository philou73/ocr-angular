export class AppareilService {
	//On crée un tableau de machines électriques
	appareils = [
		{ 
			name: 'Machine à laver', 
			status: 'éteint' 
		},
		{ 
			name: 'Frigo', 
			status: 'allumé'
		},
		{ 
			name: 'Chaîne Hifi', 
			status: 'éteint'
		}
	]
	
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