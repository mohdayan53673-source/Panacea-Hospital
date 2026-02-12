import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  currentYear = new Date().getFullYear();
  submitted = false;
  form = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  onSubmit(): void {
    this.submitted = true;
    this.form = { name: '', email: '', phone: '', message: '' };
  }
}
