import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnChanges {

  @Input() items;
  structure;
  routerLink;

  constructor(public router: Router) { 
    this.routerLink = this.router.url.replace(/#.*/, "");
  }

  ngOnChanges() {
    const titles = [];
    this.items?.forEach(i => {
      if (i.htmlTag.content === 'title') { titles.push({ name: i.content, subtitles: [] }); }
      if (i.htmlTag.content === 'subtitle') { titles[titles.length - 1].subtitles.push({ name: i.content }); }
    });
    this.structure = titles;
  }

}
