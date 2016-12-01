import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brackets = `Hey! I'm a bracket! {}`;

  twoWayBinding = '';

  functionBinding(){
    alert(`Do not use alerts in examples! they are annoying!`);
  }
}
