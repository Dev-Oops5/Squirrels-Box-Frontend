import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

list = [
  { 
    number: '1',
    name: 'Profile',
    icon: 'fa-solid fa-user',
  },
  { 
    number: '2',
    name: 'Shared',
    icon: 'fa-solid fa-users',
  },
  { 
    number: '3',
    name: 'Downloads',
    icon: 'fa-solid fa-download',
    
  },
  { 
    number: '4',
    name: 'Settings',
    icon: 'fa-solid fa-gear',
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
