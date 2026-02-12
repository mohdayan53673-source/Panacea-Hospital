import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  imports: [RouterLink, FormsModule],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss',
})
export class Appointment {
  submitted = false;
  model = {
    name: '',
    phone: '',
    email: '',
    department: '',
    date: '',
    time: '',
    message: '',
  };

  onSubmit(): void {
    this.submitted = true;
    // In a real app you would send model to your backend here
  }
}
