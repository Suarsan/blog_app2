import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent {

  @Input() post;

  constructor(public domSanitizer: DomSanitizer) { }

  public decode(e) {
    return JSON.parse(e);
  }

}
