import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() cities;
  @Input() companionships;
  @Input() transports;
  @Input() durations;
  showMenu;
  showing;

  constructor() { }

  ngOnInit() {
  }

  public toggle(e) {
    this.showing = e;
  }
  public toggleMenu(action) {
    if (action === true) {
      this.showMenu = true;
    } else if (action === false) {
      this.showMenu = false;
    } else {
      this.showMenu = !this.showMenu;
    }
  }
  public openMenu() {
    this.showMenu = true;
  }

}
