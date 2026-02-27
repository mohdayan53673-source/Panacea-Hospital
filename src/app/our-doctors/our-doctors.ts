import { Component } from '@angular/core';
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

interface Testimonial {
  quote: string;
  author: string;
  details: string;
}

@Component({
  selector: 'app-our-doctors-page',
  imports: [RouterLink],
  templateUrl: './our-doctors.html',
  styleUrl: './our-doctors.scss',
})
export class OurDoctorsPage {
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

  testimonials: Testimonial[] = [
    {
      quote: 'Opting for a knee replacement was not an easy decision, however Dr Umesh and Dr Shailesh counselled me very nicely and put my all fears to rest. Excellent care and attachment at all times with availability for help and advice.',
      author: 'Neeraj Gupta',
      details: '63 M, Knee replacement',
    },
    {
      quote: 'I was very pleased with the kindness and competence of the staff very attentive, friendly and efficient nursing staff. The overall services here is world-class. I didn\'t expected such a hospital in amroha.',
      author: 'Moona Jain',
      details: '45 F',
    },
    {
      quote: 'I am thankful to Dr Chitrak and other staff for saving me and my unborn child\'s life. I can\'t express enough gratitude to all the staff for their understanding and extreme kindness. The PHRC team — no word can describe my appreciation to you all. Thank you all for giving me and my baby life back.',
      author: 'Manika Gupta',
      details: '26 F, Multiple injuries',
    },
  ];
}
