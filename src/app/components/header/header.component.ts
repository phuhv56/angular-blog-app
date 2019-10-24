import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Works', icon: 'fa fa-fw fa-bar-chart', routerLink: ['posts'] },
      { label: 'Project', icon: 'fa fa-fw fa-book', routerLink: ['saves'] },
      { label: 'More', icon: 'fa fa-fw fa-support', routerLink: ['more'] }
    ];
  }

}
