import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PostService } from 'src/app/services/post-services/post-service/post.service';
import { tap, take, filter } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const POST = makeStateKey('post');

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  post;
  routerSubscription;

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
        tap(post => post ? this.post = post : this.router.navigate(['/404']))
      ).subscribe();
    }
  }

}
