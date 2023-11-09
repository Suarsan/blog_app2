import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-days',
  templateUrl: './page-days.component.html',
  styleUrls: ['./page-days.component.scss']
})
export class PageDaysComponent {

  @Input() post;

  public decode(e) {
    return JSON.parse(e);
  }

}
