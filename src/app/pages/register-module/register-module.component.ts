import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormMedicalComponent } from '../../components/form-medical/form-medical.component';
import { FormDeathComponent } from '../../components/form-death/form-death.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-module',
  standalone: true,
  imports: [HeaderComponent,FormMedicalComponent,FormDeathComponent,FormsModule],
  templateUrl: './register-module.component.html',
  styleUrl: './register-module.component.css'
})
export class RegisterModuleComponent {
  typeRegister: string | null = null;

}
