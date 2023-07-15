import { Injectable } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';
import { catchError, map } from 'rxjs/operators';
import { PostDaoService } from '../../../dao/post-dao-services/post-dao-service/post-dao.service';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';

const BRANDS = makeStateKey('brands');

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postDaoService: PostDaoService,
              private router: Router) { }

  public getPost(slug) {
    return this.postDaoService.getPost(slug).pipe(
      map(o => o['data']['getEnabledPostByUrl']),
      catchError(err => {
        this.router.navigate(['/404']);
        return EMPTY;
      })
    );
  }
  public getLastReviews() {
    return this.postDaoService.getPostsByType(1).pipe(
      map(o => o['data']['getPostsByType'])
    );
  }
  public getSomatotypePosts() {
    return this.postDaoService.getPostsByType(5).pipe(
      map(o => o['data']['getPostsByType'])
    );
  }
  public getBrands() {
    return this.postDaoService.getPostsByType(4).pipe(
      map(o => o['data']['getPostsByType'])
    );
  }
  public getPostsByParent(parentId) {
    return this.postDaoService.getPostsByParent(parentId).pipe(
      map(o => o['data']['getPostsByParent'])
    );
  }
  public getPostsByAuthor(firstname, lastname) {
    return this.postDaoService.getPostsByAuthor(firstname, lastname).pipe(
      map(o => o['data']['getPostsByAuthor'])
    );
  }
  public getPostsByTag(tag) {
    return this.postDaoService.getPostsByTag(tag).pipe(
      map(o => o['data']['getPostsByTag'])
    );
  }
  public getPostsByTags(tags) {
    return this.postDaoService.getPostsByTags(tags).pipe(
      map(o => o['data']['getPostsByTags'])
    );
  }
  public getPostsByScore() {
    return this.postDaoService.getPostsByScore().pipe(
      map(o => o['data']['getPostsByScore'])
    );
  }
}