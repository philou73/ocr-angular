import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	authStatus: boolean;
	
  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit() {
		this.authStatus = this.authService.isAuth;
  }
	
	//Comportement sur le sign in : dès qu'on reçoit le retour de l'authentification (obtenu avec le .then()) on met à jour le status
	onSignIn() {
		this.authService.signIn().then(
			() => {
				console.log('Sign in successfull !');
				this.authStatus = this.authService.isAuth;
				this.router.navigate(['appareils']);
			}
		)
	}
	
	onSignOut() {
		this.authService.signOut();
		this.authStatus = this.authService.isAuth;
	}

}
