import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
	private users: User[] = [new User('Will', 'Alexander', 'will@mail.com', 'jus d\'orange', ['coder', 'boire du café'])];
	//On a besoin de créer un objet Subject() pour gérer les émissions de modifications
	userSubject = new Subject<User[]>();
	
	//Fonction d'émission des changements opérés sur les Users
	emitUsers(){
		this.userSubject.next(this.users.slice());
	}
	
	//Création d'un nouvel utilisateur à partir de l'objet User passé en paramètre
	addUser(user: User){
		this.users.push(user);
		this.emitUsers();
	}
	
}