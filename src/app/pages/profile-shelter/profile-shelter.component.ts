import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-shelter',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './profile-shelter.component.html',
  styleUrl: './profile-shelter.component.css',
})
export class ProfileShelterComponent {
  name: string = '';
  lastName: string = '';
  email: string = '';
  documentType_id: number = 0;
  documentNumber: number = 0;
  birthDate: string = '';
  telephoneNumber: number = 0;
  city_id: any;
  address: string = '';
  role_id: number = 0;
  occupation: any;
  constructor(private ProfileService: ProfileService) {
    this.ProfileService.getUserProfile().subscribe({
      next: (response: any) => {
        this.name = response.name;
        this.lastName = response.lastName;
        this.email = response.email;
        this.documentType_id = response.documentType_id;
        this.documentNumber = response.documentNumber;
        this.birthDate = response.birthDate;
        this.telephoneNumber = response.telephoneNumber;
        this.city_id = response.city_id;
    },
  error: (error) => {},
    });
  }
}
