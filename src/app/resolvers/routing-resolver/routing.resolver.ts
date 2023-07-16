import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { PostService } from 'src/app/services/post-services/post-service/post.service';

@Injectable({
  providedIn: 'root'
})
export class RoutingResolver implements Resolve<boolean> {

  constructor (private postService: PostService,
              @Inject(PLATFORM_ID) private platformId,
              private transferState: TransferState) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const POST_KEY = makeStateKey('post-' + state.url);

    if (this.transferState.hasKey(POST_KEY)) {
      const post = this.transferState.get(POST_KEY, null);
      this.transferState.remove(POST_KEY);
      return of(post);
    } else {
      return this.postService.getPost(state.url).pipe(
        take(1),
        tap(post => { if (isPlatformServer(this.platformId)) { this.transferState.set(POST_KEY, post); } })
      );
    }
  }
}
