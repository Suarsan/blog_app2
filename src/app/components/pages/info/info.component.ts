import { Component, Input } from '@angular/core';

@Component({
  selector: 'span[appInfo]',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  @Input() post;

}
