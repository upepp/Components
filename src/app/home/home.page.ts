import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  amount: string='Deseja entrar no Eva?';

  handleEvent(event:any){
    console.log('True');
    alert(event);
  };

  

  constructor() {};

}
