import { Component, Input, OnChanges, Inject, PLATFORM_ID } from '@angular/core';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { map, take, tap } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { TransferState, makeStateKey, DomSanitizer } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { Router } from '@angular/router';

const CHILDREN = makeStateKey('children');

@Component({
  selector: 'page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnChanges {

  @Input() post;
  children;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private seoService: SeoService,
              private postService: PostService,
              private router: Router,
              private state: TransferState,
              public domSanitizer: DomSanitizer) { }

  ngOnChanges() {
    this._getPotsByParent(this.post.id)
    this._setMetaInfo(this.post);
    // this._setJSONLDMarkup(this.post);
  }

  private _getPotsByParent(id) {
    this.children = this.state.get(CHILDREN, null);
    this.state.set(CHILDREN, null);
    if (this.post) {
      this.postService.getPostsByParent(id).pipe(
        take(1),
        tap(posts => isPlatformServer(this.platformId) ? this.state.set(CHILDREN, posts) : null),
        map(posts => [...posts].sort((a, b) => a.title.toLocaleUpperCase() > b.title.toLocaleUpperCase() ? 1 : -1)),
        tap(posts => posts ? this.children = posts : this.router.navigate(['/404']))
      ).subscribe();
    }
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

  // private _setJSONLDMarkup(post) {
  //   const json = {
  //     '@context': 'https://schema.org/',
  //     '@type': 'Organization',
  //     name: post.title,
  //     brand: {
  //       '@type': 'Brand',
  //       logo: post.image,
  //       name: post.title,
  //     },
  //     review: {
  //       '@type': 'Review',
  //       name: post.title,
  //       author: {
  //         '@type': 'Person',
  //         name: post.author.firstname + ' ' + post.author.lastname
  //       },
  //       reviewBody: post.paragraphs.map(p => p.content).join(''),
  //       publisher: {
  //         '@type': 'Organization',
  //         name: 'Camisetas basicas online'
  //       }
  //     }
  //   };
  //   this.seoService.setJSONLDMarkups(json);
  // }
}
