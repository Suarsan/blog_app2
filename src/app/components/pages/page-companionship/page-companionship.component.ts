import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-companionship',
  templateUrl: './page-companionship.component.html',
  styleUrls: ['./page-companionship.component.scss']
})
export class PageCompanionshipComponent {

  @Input() post;

  constructor(public domSanitizer: DomSanitizer) { }

  public decode(e) {
    return JSON.parse(e);
  }

}
