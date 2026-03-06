import { Component } from '@angular/core';

export interface GalleryItem {
  src: string;
  title: string;
  category: string;
  failed?: boolean;
}

@Component({
  selector: 'app-gallery-page',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryPage {
  selectedCategory: string = 'all';

  categories = [
    { id: 'all', label: 'All' },
    { id: 'building', label: 'Building & Reception' },
    { id: 'emergency', label: 'Emergency & Ambulance' },
    { id: 'icu', label: 'ICU & Wards' },
    { id: 'ot', label: 'Operation Theaters' },
    { id: 'diagnostics', label: 'Diagnostics & Lab' },
     { id: 'specialty', label: 'Specialty Care' },
   
  ];

  items: GalleryItem[] = [
    { src: '/image-1-gallery.webp', title: 'Panacea Hospital – Main Building', category: 'building' },
    { src: '/image-20-gallery.webp', title: 'Reception & Registration', category: 'building' },
    { src: '/image-21-gallery.webp', title: 'Waiting Area', category: 'building' },
    { src: '/image-2-gallery.webp', title: 'Ambulance Fleet', category: 'emergency' },
    { src: '/image-11-gallery.webp', title: 'Intensive Care Unit', category: 'icu' },
    { src: '/image-10-gallery.webp', title: 'Patient Ward', category: 'icu' },
    { src: '/image-26-gallery (1).webp', title: 'X-Ray Room', category: 'diagnostics' },
    { src: '/image-8-gallery.webp', title: 'Recovery Ward', category: 'icu' },
    { src: '/image-9-gallery.webp', title: 'Patient Room', category: 'icu' },
    { src: '/image-23-gallery.webp', title: 'Modular Operation Theatre', category: 'ot' },
    { src: '/image-18-gallery.webp', title: 'OT-1 & OT-2', category: 'ot' },  
    { src: '/image-13-gallery.webp', title: 'Radiology & Imaging', category: 'diagnostics' },
    { src: '/image-14-gallery.webp', title: 'Medicine Room ', category: 'diagnostics' },
    { src: '/image-15-gallery.webp', title: 'NABH Accreditation', category: 'all' },
    { src: '/image-16-gallery.webp', title: 'Neonatal Intensive Care Unit', category: 'icu'},    
    { src: '/Nicu-picu.webp', title: 'NICU & PICU', category: 'speciality'},
    { src: '/image-19-gallery.webp', title: 'Pathology Lab', category: 'diagnostics' },  
    { src: '/image-17-gallery.webp', title: 'Eye Examination Room', category: 'specialty' },
    { src: '/image-22-gallery.webp', title: 'Ultrasound Room', category: 'diagnostics' },
    { src: '/image-23-gallery.webp', title: 'Procedure Room', category: 'building' },
    { src: '/image-24-gallery.webp', title: 'Radiology & Imaging', category: 'team' },
    { src: '/image-26-gallery.webp', title: 'Hospital Staff Room', category: 'team' },
    { src: '/image-27-gallery.webp', title: 'MRI / CT Suite', category: 'diagnostics' },
    { src: '/image-28-gallery.webp', title: 'Emergency Room', category: 'emergency' },    
  ];

  get filteredItems(): GalleryItem[] {
    if (this.selectedCategory === 'all') return this.items;
    return this.items.filter((i) => i.category === this.selectedCategory);
  }

  setCategory(id: string): void {
    this.selectedCategory = id;
  }

  onImageError(item: GalleryItem): void {
    item.failed = true;
  }
}
