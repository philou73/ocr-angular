export class AuthService {
	isAuth = false;
	
	// On simule une authentification avec une Promise (on sera connecté au bout de 2 sec)
	signIn() {
		return new Promise(
			(resolve, reject) => {
				setTimeout(
					() => {
						this.isAuth = true;
						resolve(true);
					}, 2000
				);
			}
		);
	}
	
	signOut() {
		this.isAuth = false;
	}
}