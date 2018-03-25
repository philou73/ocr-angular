import { Component, OnInit } from '@angular/core'; //On importe "OnInit"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { // On a ajouté "implements OnInit" pour implémenter l'interface
  title = 'app';

  constructor() {}

	ngOnInit(){}
	
}
