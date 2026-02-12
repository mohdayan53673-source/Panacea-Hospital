import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-technology',
  imports: [RouterLink],
  templateUrl: './technology.html',
  styleUrl: './technology.scss',
})
export class Technology {
  currentYear = new Date().getFullYear();
}
