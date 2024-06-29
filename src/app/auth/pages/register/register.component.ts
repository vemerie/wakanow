import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../core/shared/loader/loader.component';
import { IUserPayloadForm } from '../../interfaces/auth-form.interface';
import { SharedModule } from '../../../core/shared/shared.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.intiForm();
  }

  intiForm() {
    this.registerForm = this.fb.group<IUserPayloadForm>({
      username: this.fb.nonNullable.control('', Validators.required),
      email: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.nonNullable.control('', Validators.required),
    });
  }

  get registerFormData() {
    return this.registerForm.controls;
  }

  register() {
    const data = this.registerForm.value;
    if (this.registerForm.valid) {
      this.loading = true;

      this.authService.signup(data).subscribe({
        next: () => {
          alert('Signup successful! Waiting for approval.');
          this.registerForm.reset();
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        },
      });
    }
  }
}
