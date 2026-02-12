import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  menuOpen = false;
  currentYear = new Date().getFullYear();

  /** Cursor follower: logo position and visibility (only when pointer is fine, e.g. mouse) */
  cursorX = 0;
  cursorY = 0;
  cursorVisible = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
    this.cursorVisible = true;
  }

  @HostListener('document:mouseleave')
  onMouseLeave(): void {
    this.cursorVisible = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
