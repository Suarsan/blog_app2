import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.scss']
})
export class KeyvalueComponent {

  @Input() title;
  @Input() data;
  @Input() inline;

}
