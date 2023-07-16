import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-transport',
  templateUrl: './page-transport.component.html',
  styleUrls: ['./page-transport.component.scss']
})
export class PageTransportComponent {

  @Input() post;

  constructor(public domSanitizer: DomSanitizer) { }

  public decode(e) {
    return JSON.parse(e);
  }

}
