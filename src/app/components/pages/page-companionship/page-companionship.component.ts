import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-companionship',
  templateUrl: './page-companionship.component.html',
  styleUrls: ['./page-companionship.component.scss']
})
export class PageCompanionshipComponent {

  @Input() post;

  public decode(e) {
    return JSON.parse(e);
  }

}
