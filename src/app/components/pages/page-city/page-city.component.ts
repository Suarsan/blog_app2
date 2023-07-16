import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-city',
  templateUrl: './page-city.component.html',
  styleUrls: ['./page-city.component.scss']
})
export class PageCityComponent implements OnChanges {

  @Input() post;
  @Input() relatedPosts;
  mapsCode;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnChanges() {
    this._setMapsCode(this.post);
  }

  public decode(e) {
    try {
      return JSON.parse(e);
    } catch (error) {
      console.dir(error);
      return [];
    }
  }

  private _setMapsCode(post) {
    return this.mapsCode = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=' + post?.paragraphs?.find(p => p?.htmlTag?.content === 'maps' )?.content);
  }

}
