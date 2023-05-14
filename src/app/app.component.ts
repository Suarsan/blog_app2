import { Component, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Subscription } from 'rxjs';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  // routerSubscription: Subscription;

  // constructor(@Inject(PLATFORM_ID) private platformId: object) {
                // this.routerSubscription = this.router.events.subscribe(event => {
                //   if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
                //       gtag('config', 'G-MBJW38R751', { page_path: event.urlAfterRedirects });
                //   }
                // });
  // }

  ngOnDestroy() {
    // this.routerSubscription.unsubscribe();
  }
}
