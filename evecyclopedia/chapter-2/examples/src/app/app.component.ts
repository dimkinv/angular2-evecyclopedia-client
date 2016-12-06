import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brackets:string = `Hey! I'm a bracket! {}`;
  helpText:string = 'This is a great button, you should definatelly click it!';
  color:string = 'red';
  twoWayBinding:string = '';

  shouldDisplay:boolean= true;
  eveRaces: string[] = ['Amarr', 'Caldari', 'Gallente', 'Minmatar', 'Jove'];
  functionBinding(){
    alert(`Do not use alerts in examples! they are annoying!`);
  }
}
