import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-transport',
  templateUrl: './page-transport.component.html',
  styleUrls: ['./page-transport.component.scss']
})
export class PageTransportComponent {

  @Input() post;

  public decode(e) {
    return JSON.parse(e);
  }

}
