import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Doctor {
  name: string;
  specialization: string;
  qualifications: string;
  timings: string;
  availability: string;
  initials: string;
  avatarColor: string;
  avatarImage?: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  readonly slides = [0, 1, 2, 3, 4, 5, 6, 7];
  currentSlide = 0;
  private autoAdvance?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.autoAdvance = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.autoAdvance) clearInterval(this.autoAdvance);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  doctors: Doctor[] = [
    { name: 'DR. CHITRAK BANSAL', specialization: 'Medicine, Cardiology & Diabetes', qualifications: '(MBBS, MD, MFM, FCC)', timings: '10:00 AM - 4:00 PM', availability: '(Monday to Saturday)', initials: 'CB', avatarColor: '#2563eb' },
    { name: 'DR. NAUSHAD KHAN', specialization: 'Orthopaedics', qualifications: '(MBBS, MS)', timings: '10:00 AM - 4:00 PM', availability: '(Monday to Saturday)', initials: 'NK', avatarColor: '#059669' },
    { name: 'DR. ASJAD KHAN', specialization: 'Ophthalmology', qualifications: '(MBBS, MS)', timings: '10:00 AM - 4:00 PM', availability: '(Sunday only)', initials: 'AK', avatarColor: '#7c3aed' },
    { name: 'DR. VIBHOR AGARWAL', specialization: 'General & Laparoscopic Surgeon', qualifications: '(MBBS, MS)', timings: '10:00 AM - 4:00 PM', availability: '(Monday to Saturday)', initials: 'VA', avatarColor: '#dc2626' },
    { name: 'DR. GARIMA SINGH', specialization: 'Gynaecology', qualifications: '(M.B.B.S, M.S)', timings: '10:00 AM - 4:00 PM', availability: '(Monday to Saturday)', initials: 'GS', avatarColor: '#db2777' },
    { name: 'DR. S S JAIN', specialization: 'Pediatrics & Neonatology', qualifications: '(MBBS, MD)', timings: '11:00 AM - 3:00 PM', availability: '(Monday to Saturday)', initials: 'SJ', avatarColor: '#0d9488' },
    { name: 'DR. DHAWAL SHARMA', specialization: 'Neurosurgery', qualifications: '(MBBS, MS, MCH)', timings: '2:00 PM - 5:00 PM', availability: '(Sunday only)', initials: 'DS', avatarColor: '#1d4ed8' },
    { name: 'DR. ANIL RAJPUT', specialization: 'Plastic Surgery', qualifications: '(MBBS, MS, MCH)', timings: '3:00 PM - 6:00 PM', availability: '(Thursday only)', initials: 'AR', avatarColor: '#ea580c' },
    { name: 'DR. SANDEEP KUMAR', specialization: 'Urologist', qualifications: '(MBBS, MS, MCH)', timings: '11:00 AM - 3:00 PM', availability: '(Sunday only)', initials: 'SK', avatarColor: '#ca8a04' },
    { name: 'DR. NIRANJAN REDDY', specialization: 'Critical Care', qualifications: '(MBBS, MD)', timings: '2:00 PM - 5:00 PM', availability: '(Monday to Saturday)', initials: 'NR', avatarColor: '#be185d' },
    { name: 'DR. SACHIN DEV', specialization: 'Dental & Maxillofacial Surgeon', qualifications: '(BDS, MDS)', timings: '2:00 PM - 5:00 PM', availability: '(Monday to Saturday)', initials: 'SD', avatarColor: '#0369a1' },
  ];
}
