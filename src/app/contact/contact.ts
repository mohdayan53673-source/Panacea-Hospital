import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import Swal from 'sweetalert2';

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

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    const body = {
      name: this.form.name,
      email: this.form.email,
      phone: this.form.phone,
      message: this.form.message,
    };

    this.http.post<{ success: boolean; message?: string }>(`${environment.apiUrl}/api/contact`, body).subscribe({
      next: () => {
        this.submitted = true;
        this.form = { name: '', email: '', phone: '', message: '' };
        Swal.fire({
          icon: 'success',
          title: 'Message Sent',
          text: 'Thank you for reaching out! We will get back to you soon.',
          confirmButtonColor: '#2563eb',
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: 'Please try again or call us directly.',
          confirmButtonColor: '#2563eb',
        });
      },
    });
  }
}
