import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 
  fontSize: number = 100; 
  isDarkMode: boolean = false;
  showIndicator: boolean = false; 
  private timer: any;
  constructor(private cdr: ChangeDetectorRef ) {}

  private triggerIndicator() {
    this.showIndicator = true;
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.showIndicator = false;
      this.cdr.detectChanges();
    }, 2000);
  }

  incrementFont() {
    if (this.fontSize < 150) {
      this.fontSize += 5;
      this.triggerIndicator();
    }
  }

  decrementFont() {
    if (this.fontSize > 75) {
      this.fontSize -= 5;
      this.triggerIndicator();
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}