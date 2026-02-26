import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

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
        },
        error: () => {
          alert('Something went wrong. Please try again or call us to book your appointment.');
        },
      });
    }
  }
}
