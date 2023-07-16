import { Component, Input } from '@angular/core';
import { makeStateKey, DomSanitizer } from '@angular/platform-browser';

const CHILDREN = makeStateKey('children');

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
