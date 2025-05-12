import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './nav.component.html'
})
export class NavComponent {
  mobileMenuOpen = false;
  
  navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About Me', exact: false },
    { path: '/internship', label: 'Internship', exact: false },
    { path: '/projects', label: 'Projects', exact: false }
  ];
}
