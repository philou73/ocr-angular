import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
	
	users: User[];
	userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
		/* On s'abonne aux émissions du service UserService :
				- méthode subscribe()
				- qui écoute un tableau de Users[]
				- qui met à jour notre propre tableau de users
				- ne pas oublier de lancer emitUsers pour récupérer les premiers users
		*/
		this.userSubscription = this.userService.userSubject.subscribe(
			(users: User[]) => {
				this.users = users;
			}
		);
		this.userService.emitUsers();
  }

	//A la destruction, on libère l'écoute du service)
	ngOnDestroy(){
		this.userSubscription.unsubscribe();
	}
}
