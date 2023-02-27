import { Component, OnInit } from '@angular/core';
import { PostDaoService } from 'src/app/dao/post-dao-services/post-dao-service/post-dao.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts;

  constructor(private postDaoService: PostDaoService) { }

  ngOnInit() {
    this._getPosts();
  }

  private _getPosts() {
    this.postDaoService.getPostsByTag('home').pipe(
      tap(post => this.posts = post['data']['getPostsByTag']),
      tap(post => console.dir(this.posts))
    ).subscribe();
  }
}
