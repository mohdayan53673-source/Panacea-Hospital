import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment',
  imports: [RouterLink, FormsModule],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss',
})
export class Appointment {
  model: any = {};
  submitted = false;

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const body = {
        name: this.model.name,
        phone: this.model.phone,
        email: this.model.email || '',
        department: this.model.department || '',
        date: this.model.date || '',
        time: this.model.time || '',
        message: this.model.message || '',
      };

      this.http.post<{ success: boolean; message?: string }>(`${environment.apiUrl}/api/appointments`, body).subscribe({
        next: () => {
          this.submitted = true;
          form.resetForm();
          Swal.fire({
            icon: 'success',
            title: 'Request Received',
            text: 'Thank you! We will contact you shortly to confirm your appointment.',
            confirmButtonColor: '#2563eb',
          });
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong',
            text: 'Please try again or call us to book your appointment.',
            confirmButtonColor: '#2563eb',
          });
        },
      });
    }
  }
}
