import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { EMPTY, Subscription } from 'rxjs';
import { SeoService } from 'src/app/services/seo/seo.service';

const RELATEDPOSTS = makeStateKey('relatedPosts');

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  post;
  relatedPosts;
  routerSubscription: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private seoService: SeoService,
              private postService: PostService,
              private state: TransferState) { }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = (fut, curr) =>  {
      // @ts-ignore
      return fut._routerState.url.replace(/#.*/, "") === curr._routerState.url.replace(/#.*/, "");
    };
    this.post = this.activatedRoute.snapshot.data.post;
    this._setMetaInfo(this.post);
    this._setStructuredData(this.post);
    this._getRelatedPosts(this.post.type.content).subscribe();
  }

  private _getRelatedPosts(postType) {
    switch (postType) {
      case 'CITY':
        return this.postService.getPostsByTag('near-' + this.router.url.split('/')[this.router.url.split('/').length - 1].replace(/#.*/, "")).pipe(
          take(1),
          tap(relatedPosts => isPlatformServer(this.platformId) ? this.state.set(RELATEDPOSTS, relatedPosts) : null),
          tap(relatedPosts => relatedPosts ? this.relatedPosts = relatedPosts : [])
        );
        default:
          return EMPTY;
    }
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
  
  private _setStructuredData(post) {
    const markupJSONs = [];

    // set Exploration markups
    markupJSONs.push(this.getExplorationMarkups(post));
    
    //set Faqs markups
    const faqs = this.post.paragraphs.filter(p => p.htmlTag.content === 'faq');
    console.dir(faqs)
    if (faqs?.length) {
      markupJSONs.push(this.getFaqsMarkups(faqs));
    }

    this.seoService.setJSONLDMarkups(markupJSONs);
  }

  private getExplorationMarkups(post) {
    const markups = [{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": post.title,
        "item": 'https://descubrelavera.com/' + post.slug
      }]
    }];
    if (post.parent) {
      markups[0].itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": post.parent.title,
        "item": 'https://descubrelavera.com/' + post.slug + '/' + post.parent.slug
      })
    }
    return markups;
  }

  private getFaqsMarkups(faqs) {
    const markups = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": []
    }
    for (let faq of faqs) {
      markups.mainEntity.push({
        "@type": "Question",
        "name": faq.content.split(';')[0],
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.content.split(';')[1]
        }
      });
    }
    return markups;
  }

}
