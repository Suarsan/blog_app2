import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnChanges {

  @Input() items;
  structure;

  constructor() { }

  ngOnChanges() {
    const titles = [];
    this.items.forEach((i, n) => {
      if (i.htmlTag.content === 'title') { titles.push({ name: i.content, subtitles: [] }); }
      if (i.htmlTag.content === 'subtitle') { titles[titles.length - 1].subtitles.push({ name: i.content }); }
    });
    this.structure = titles;
  }

}
