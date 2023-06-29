import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PageComponent } from './components/pages/page/page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: '404',  pathMatch: 'full', component: NotfoundComponent },
  { path: 'privacy', pathMatch: 'full', loadChildren: () => import('./components/loyalty-privacy/loyalty-privacy.module').then(m => m.LoyaltyPrivacyModule) },
  { path: 'cookies', pathMatch: 'full', loadChildren: () => import('./components/loyalty-cookies/loyalty-cookies.module').then(m => m.LoyaltyCookiesModule) },
  { path: 'legal', pathMatch: 'full', loadChildren: () => import('./components/legal/legal.module').then(m => m.LegalModule) },
  { path: ':slug', component: PageComponent, loadChildren: () => import('./components/pages/page/page.module').then(m => m.PageModule) },
  { path: '**', component: PageComponent, loadChildren: () => import('./components/pages/page/page.module').then(m => m.PageModule) }
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
