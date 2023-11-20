import { Component, Input } from '@angular/core';

@Component({
  selector: 'section[appKeyValue]',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.scss']
})
export class KeyvalueComponent {

  @Input() title;
  @Input() data;
  @Input() inline;

}
