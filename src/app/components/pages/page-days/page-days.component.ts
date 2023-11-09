import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-days',
  templateUrl: './page-days.component.html',
  styleUrls: ['./page-days.component.scss']
})
export class PageDaysComponent {

  @Input() post;

  constructor(public domSanitizer: DomSanitizer) { }

  public decode(e) {
    return JSON.parse(e);
  }

}
