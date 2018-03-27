import { Component, OnInit, OnDestroy } from '@angular/core'; //On importe "OnInit"
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// On a ajouté "implements OnInit" pour implémenter l'interface
export class AppComponent implements OnInit, OnDestroy { 
  title = 'app';
	secondes: number;
	counterSubscription : Subscription;

  constructor() {}

	ngOnInit(){
		const counter = Observable.interval(1000);
		
		//On souscrit aux événements de l'observable
		this.counterSubscription = counter.subscribe(
			(value) => {
				this.secondes = value;
			},
			(error) => {
				console.log('An error occured : ' + error);
			},
			() => {
				console.log('Observable complete');
			}
		)
	}
	
	ngOnDestroy(){
		this.counterSubscription.unsubscribe();
	}
	
}
