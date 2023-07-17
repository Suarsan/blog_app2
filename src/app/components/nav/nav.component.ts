import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent { 
  
  @Input() extended;

  constructor() {}

}
