import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { GetProfileResponse } from '../../interfaces/getProfileResponse.interface';
/* import { GetProfileResponse } from '../../interfaces/GetProfileResponse.interface'; */


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userName: string = '';
  userLastName: string = '';
  role: number = 0;
  subMenu: boolean = false;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
  ) {
    this.profileService.getUserProfile().subscribe({
      next: (response: GetProfileResponse) => {
        this.userName = response.name;
        this.role = response.role_id;
        this.userLastName = response.lastName;
      },
      error: (error) => {},
    });
  }

  logOut() {
    this.authService.logout();
  }

  showLoginButton(): boolean {
    return !this.authService.isAuth();
  }
  toggleMenu() {
    this.subMenu = !this.subMenu;
  }
}
