import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss']
})
export class MainGridComponent implements OnInit {

  post1;
  post2;
  post3;
  post4;

  @Input('posts') set posts(posts) {
    if (posts) {
      console.dir(posts)
      this.post1 = posts[0];
      this.post2 = posts[1];
      this.post3 = posts[2];
      this.post4 = posts[3];
    }
  }

  constructor() { }

  ngOnInit() { }

}