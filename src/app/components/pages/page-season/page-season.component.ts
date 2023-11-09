import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-season',
  templateUrl: './page-season.component.html',
  styleUrls: ['./page-season.component.scss']
})
export class PageSeasonComponent {

  @Input() post;

  public decode(e) {
    return JSON.parse(e);
  }

}
