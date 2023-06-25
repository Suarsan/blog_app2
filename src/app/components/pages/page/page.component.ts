import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take, filter } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { Subscription } from 'rxjs';

const POST = makeStateKey('post');
const RELATEDPOSTS = makeStateKey('relatedposts');

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
              private state: TransferState) { }

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
    this.post = this.state.get(POST, null);
    this.state.set(POST, null);
    if (!this.post) {
      this.postService.getPost(this.router.url.split('/')[this.router.url.split('/').length - 1].replace(/#.*/, "")).pipe(
        take(1),
        tap(post => isPlatformServer(this.platformId) ? this.state.set(POST, post) : null),
        tap(post => post ? this.post = post : this.router.navigate(['/404'])),
        tap(post => this.post.type.content === 'CITY' ? this._getRelatedPosts() : null)
      ).subscribe();
    }
  }

  private _getRelatedPosts() {
    this.relatedPosts = this.state.get(RELATEDPOSTS, null);
    this.state.set(RELATEDPOSTS, null);
    if (!this.relatedPosts) {
      this.postService.getPostsByTag('near-' + this.router.url.split('/')[this.router.url.split('/').length - 1].replace(/#.*/, "")).pipe(
        take(1),
        tap(relatedPosts => isPlatformServer(this.platformId) ? this.state.set(RELATEDPOSTS, relatedPosts) : null),
        tap(relatedPosts => relatedPosts ? this.relatedPosts = relatedPosts : [])
      ).subscribe();
    }
  }

}
