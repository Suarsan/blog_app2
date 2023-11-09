import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent {

  @Input() post;

  public decode(e) {
    return JSON.parse(e);
  }

}
