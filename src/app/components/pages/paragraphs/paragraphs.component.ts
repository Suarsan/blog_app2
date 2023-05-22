import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-paragraphs',
  templateUrl: './paragraphs.component.html',
  styleUrls: ['./paragraphs.component.scss']
})
export class ParagraphsComponent {
  
  @Input() paragraphs;

  constructor(public domSanitizer: DomSanitizer) {}

  public decode(e) {
    return JSON.parse(e);
  }

}
