import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-ship-editor',
  templateUrl: './ship-editor.component.html',
  styleUrls: ['./ship-editor.component.less']
})
export class ShipEditorComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        if(params['shipName'] === '__new__'){
          console.log('Create new Ship');
        }else{
          console.log('Edit ship');
        }
      });

  }

}
