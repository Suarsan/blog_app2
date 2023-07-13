import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo/seo.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { PostService } from 'src/app/services/post-services/post-service/post.service';

const POSTS = makeStateKey('posts');

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts;

  constructor(@Inject(PLATFORM_ID) private platformId: object,
              private postService: PostService,
              private seoService: SeoService,
              private state: TransferState) { }

  ngOnInit() {
    this._setMetaInfo();
    this._getPosts();
  }

  private _getPosts() {
    this.posts = this.state.get(POSTS, null);
    this.state.set(POSTS, null);
    if (!this.posts) {
      this.postService.getPostsByTag('home').pipe(
        take(1),
        tap(posts => isPlatformServer(this.platformId) ? this.state.set(POSTS, posts) : null),
        tap(posts => this.posts = posts)
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
