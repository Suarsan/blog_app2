import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { PostService } from 'src/app/services/post-services/post-service/post.service';

const UPDATEDPOSTS = makeStateKey('posts');

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  updatedPosts;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private postService: PostService,
              private seoService: SeoService,
              private state: TransferState) { }

  ngOnInit() {
    this._setMetaInfo();
    this._getUpdatedPosts();
  }

  private _getUpdatedPosts() {
    this.updatedPosts = this.state.get(UPDATEDPOSTS, null);
    this.state.set(UPDATEDPOSTS, null);
    if (!this.updatedPosts) {
      this.postService.getPostsByTag('home').pipe(
        take(1),
        tap(posts => isPlatformServer(this.platformId) ? this.state.set(UPDATEDPOSTS, posts) : null),
        tap(posts => this.updatedPosts = posts)
      ).subscribe();
    }
  }

  private _setMetaInfo() {
    this.seoService.setMetaTags({
      title: 'Descubre la Vera - Las mejores guías para encontrar el plan perfecto',
      description: 'Todo aquello que buscas sobre la comarca de la Vera, resumido, organizado y sin rodeos. Encuentra la guía que estás buscando.',
      slug: '',
      parent: '',
      image: ''
    });
  }
}
