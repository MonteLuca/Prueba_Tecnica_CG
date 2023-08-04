import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent {

  public registerForm : FormGroup;

  constructor (private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      dni: new FormControl('', [Validators.required, Validators.minLength(7)]),
      phoneNumber : new FormControl('', [Validators.required, Validators.minLength(6)]),
      email : new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|ar|cl|us|ca)$/)])
    })

  };

  submit() {
    if( this.registerForm.valid ) {
      localStorage.setItem('Usuario', JSON.stringify(this.registerForm.value));
    }
  }

}
