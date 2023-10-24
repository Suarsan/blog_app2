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
  mapsUrl;
  aboutInfo;
  phonesInfo;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnChanges() {
    this._setMapsCode(this.post);
    this._setAboutInfo(this.post);
    this._setPhonesInfo(this.post);
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
    return this.mapsUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(post?.paragraphs?.find(p => p?.htmlTag?.content === 'maps' )?.content);
  }
  
  private _setAboutInfo(post) {
    return this.aboutInfo = post?.paragraphs?.find(p => p?.htmlTag?.content === 'info' )?.content;
  }
  private _setPhonesInfo(post) {
    return this.phonesInfo = post?.paragraphs?.find(p => p?.htmlTag?.content === 'phones' )?.content;
  }

}
