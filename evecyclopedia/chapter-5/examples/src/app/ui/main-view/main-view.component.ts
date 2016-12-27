import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'main-view',
  templateUrl: './main-view.html'
})
export class MainViewComponent {
  private rand: number;
  constructor(private router: Router) {

  }

  gotoDetails() {
    this.router.navigate(['/details']);
  }

  gotoDetailsWithParam(){
    this.router.navigate(['/details', this.rand]);
  }
}
