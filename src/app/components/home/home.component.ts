import { Component, OnInit } from '@angular/core';
import { PostDaoService } from 'src/app/dao/post-dao-services/post-dao-service/post-dao.service';
import { tap } from 'rxjs/operators';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts;

  constructor(private postDaoService: PostDaoService,
              private seoService: SeoService) { }

  ngOnInit() {
    this._setMetaInfo();
    this._getPosts();
  }

  private _getPosts() {
    this.postDaoService.getPostsByTag('home').pipe(
      tap(post => this.posts = post['data']['getPostsByTag'])
    ).subscribe();
  }

  private _setMetaInfo() {
    this.seoService.setMetaTags({
      title: 'Home',
      description: 'Descubre la Vera - Home',
      slug: '',
      parent: '',
      image: ''
    });
  }
}
