import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Over Mij', path: '/about' },
    { name: 'Stage', path: '/internship' },
    { name: 'Projecten', path: '/projects' }
  ];
}
