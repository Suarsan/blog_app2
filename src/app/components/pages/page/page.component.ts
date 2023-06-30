import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take, filter, mergeMap } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { EMPTY, Subscription } from 'rxjs';

const POST = makeStateKey('post');
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
              private postService: PostService,
              private state: TransferState) { 
                this.post = this.state.get(POST, null);
                this.relatedPosts = this.state.get(RELATEDPOSTS, null)
                this.state.set(POST, null);
                this.state.set(RELATEDPOSTS, null)
              }

  ngOnInit() {
    this._getPost();
    this._routerSubscription();
  }

  private _routerSubscription() {
    this.routerSubscription?.unsubscribe();
    this.routerSubscription = this.router.events.pipe(
      filter(o => o instanceof NavigationEnd),
      tap(o => this._getPost())
    ).subscribe();
  }

  private _getPost() {
    if (!this.post) {
      this.postService.getPost(this.router.url.split('/')[this.router.url.split('/').length - 1].replace(/#.*/, "")).pipe(
        take(1),
        tap(post => isPlatformServer(this.platformId) ? this.state.set(POST, post) : null),
        tap(post => post ? this.post = post : this.router.navigate(['/404'])),
        mergeMap(post => this._getRelatedPosts(post.type.content))
      ).subscribe();
    }
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

}
