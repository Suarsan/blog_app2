import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-season',
  templateUrl: './page-season.component.html',
  styleUrls: ['./page-season.component.scss']
})
export class PageSeasonComponent {

  @Input() post;

  constructor(public domSanitizer: DomSanitizer) { }

  public decode(e) {
    return JSON.parse(e);
  }

}
