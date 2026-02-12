import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
      // Using FormSubmit.co - sends directly to mohdayan4673@gmail.com
      // No account required! Just use your email in the URL.
      const formData = new FormData();
      formData.append('name', this.model.name);
      formData.append('phone', this.model.phone);
      formData.append('email', this.model.email || 'no-email@provided.com');
      formData.append('department', this.model.department || 'Not specified');
      formData.append('date', this.model.date || 'Not specified');
      formData.append('time', this.model.time || 'Not specified');
      formData.append('message', this.model.message || 'No message');
      formData.append('_subject', 'New Appointment Request - Panacea Hospital');
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      this.http.post('https://formsubmit.co/mohdayan4673@gmail.com', formData, {
        responseType: 'text'
      })
        .subscribe({
          next: () => {
            console.log('Form submitted successfully');
            this.submitted = true;
            form.resetForm();
          },
          error: (err: { status?: number }) => {
            // FormSubmit returns 200 with HTML, which is actually a success
            if (err.status === 200) {
              console.log('Form submitted successfully (HTML response)');
              this.submitted = true;
              form.resetForm();
            } else {
              console.error('Error submitting form', err);
              alert('Oops! Something went wrong. Please try again.');
            }
          }
        });
    }
  }
}
