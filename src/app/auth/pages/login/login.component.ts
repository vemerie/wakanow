import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../core/shared/loader/loader.component';
import { SharedModule } from '../../../core/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get loginFormData() {
    return this.loginForm.value;
  }

  login() {
    if (this.loginForm.valid) {
      const payload = this.loginForm.value;
      this.authService.login(payload).subscribe((user) => {
        if (user) {
          this.router.navigate(['/admin']);
        } else {
          alert('User not approved or does not exist.');
        }
      });
    }
  }
}
