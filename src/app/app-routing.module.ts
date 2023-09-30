import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/pages/page/page.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RoutingResolver } from './resolvers/routing-resolver/routing.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: '404', component: NotfoundComponent, pathMatch: 'full', loadChildren: () => import('./components/notfound/notfound.module').then(m => m.NotfoundModule) },
  { path: 'privacy', pathMatch: 'full', loadChildren: () => import('./components/loyalty-privacy/loyalty-privacy.module').then(m => m.LoyaltyPrivacyModule) },
  { path: 'cookies', pathMatch: 'full', loadChildren: () => import('./components/loyalty-cookies/loyalty-cookies.module').then(m => m.LoyaltyCookiesModule) },
  { path: 'legal', pathMatch: 'full', loadChildren: () => import('./components/legal/legal.module').then(m => m.LegalModule) },
  { path: '**', component: PageComponent, resolve: { post: RoutingResolver}, loadChildren: () => import('./components/pages/page.module').then(m => m.PageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
