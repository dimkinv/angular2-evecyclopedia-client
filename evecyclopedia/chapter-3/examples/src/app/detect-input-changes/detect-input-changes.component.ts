import {Component, Input, OnChanges, SimpleChange, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'detect-input-changes',
  templateUrl: './detect-input-changes.component.html',
})
export class DetectInputChangesComponent implements OnChanges {
  private _firstName;
  @Input() set firstName(newVal: string) {
    console.log('%c firstName setter :: Value changed: ' + newVal, 'background: #222; color: #dad755; font-size: 20px');
    this._firstName = newVal;
  };

  get firstName(): string {
    return this._firstName;
  }

  @Input() lastName: string;

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('%c ngOnChanges :: I detected changes on Inputs!', 'background: #222; color: #55daa0; font-size: 20px', changes);
  }
}
