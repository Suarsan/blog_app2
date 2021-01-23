import { Component, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PostDaoService } from './dao/post-dao-services/post-dao-service/post-dao.service';
import { tap } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  cities;
  companionships;
  transports;
  durations;
  routerSubscription: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private postDaoService: PostDaoService,
              private router: Router) {
                this.routerSubscription = this.router.events.subscribe(event => {
                  if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
                      gtag('config', 'G-MBJW38R751', { page_path: event.urlAfterRedirects });
                  }
                });
                this._getCities();
                this._getCompaninships();
                this._getTransports();
                this._getDurations();
  }

  private _getCities() {
    this.postDaoService.getPostsByType(1).pipe(
      tap(o => this.cities = o['data']['getPostsByType'])
    ).subscribe();
  }
  private _getCompaninships() {
    this.postDaoService.getPostsByType(7).pipe(
      tap(o => this.companionships = o['data']['getPostsByType'])
    ).subscribe();
  }
  private _getTransports() {
    this.postDaoService.getPostsByType(4).pipe(
      tap(o => this.transports = o['data']['getPostsByType'])
    ).subscribe();
  }
  private _getDurations() {
    this.postDaoService.getPostsByType(5).pipe(
      tap(o => this.durations = o['data']['getPostsByType'])
    ).subscribe();
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
