import { Component, Input, OnChanges, Inject, PLATFORM_ID } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { TransferState, makeStateKey, DomSanitizer } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const POSTS = makeStateKey('posts');

@Component({
  selector: 'page-days',
  templateUrl: './page-days.component.html',
  styleUrls: ['./page-days.component.scss']
})
export class PageDaysComponent implements OnChanges {

  @Input() post;

  constructor(private seoService: SeoService,
              public domSanitizer: DomSanitizer) { }

  ngOnChanges() {
    this._setMetaInfo(this.post);
    this._setJSONLDMarkup(this.post);
  }

  public decode(e) {
    return JSON.parse(e);
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

  private _setJSONLDMarkup(post) {
    const json = {
      '@context': 'https://schema.org/',
      '@type': 'Organization',
      name: post.title,
      brand: {
        '@type': 'Brand',
        logo: post.image,
        name: post.title,
      },
      review: {
        '@type': 'Review',
        name: post.title,
        author: {
          '@type': 'Person',
          name: post.author.firstname + ' ' + post.author.lastname
        },
        reviewBody: post.paragraphs.map(p => p.content).join(''),
        publisher: {
          '@type': 'Organization',
          name: 'Camisetas basicas online'
        }
      }
    };
    this.seoService.setJSONLDMarkups(json);
  }
}
