import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      number: new FormControl(),
      street: new FormControl(),
      zipcode: new FormControl(),
      city: new FormControl(),

    phone: new FormControl(),

  });

  constructor(private _registerService: RegisterService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._registerService.create({
      email: registerForm.get('email')?.value,
      username: registerForm.get('username')?.value,
      password: registerForm.get('password')?.value,
        lastname: registerForm.get('lastname')?.value,
        firstname: registerForm.get('firstname')?.value,
        street: registerForm.get('street')?.value,
        number: registerForm.get('number')?.value,
        city: registerForm.get('city')?.value,
        zipcode: registerForm.get('zipcode')?.value,
      phone: registerForm.get('phone')?.value,

    }).subscribe();
  }
}
