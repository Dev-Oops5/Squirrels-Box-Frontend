import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
