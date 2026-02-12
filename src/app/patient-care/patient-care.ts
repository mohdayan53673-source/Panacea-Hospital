import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-care',
  imports: [RouterLink],
  templateUrl: './patient-care.html',
  styleUrl: './patient-care.scss',
})
export class PatientCare {
  currentYear = new Date().getFullYear();
}
