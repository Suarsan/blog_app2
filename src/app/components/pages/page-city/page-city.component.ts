import { Component, Input, OnChanges } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';
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

  constructor(private seoService: SeoService,
              private domSanitizer: DomSanitizer) { }

  ngOnChanges() {
    this._setMetaInfo(this.post);
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

  private _setMetaInfo(post) {
    this.seoService.setMetaTags({
      title: post.metaTitle,
      description: post.metaDescription,
      slug: post.slug,
      parent: post.parent,
      image: post.image
    });
  }

}
