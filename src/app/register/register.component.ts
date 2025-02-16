import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  isCollapsed = true;
  focus: any;
  focus1: any;
  focus2: any;
  focusFullName: boolean = false;
  focusEmail: boolean = false;
  focusPassword: boolean = false;
  focusDate: boolean = false;
  focusPhone: boolean = false;
  focusConfirmEmail: boolean = false;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      civilite: ['', Validators.required],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', [Validators.required,Validators.pattern(/^\+?[1-9][0-9]{9,14}$/)]],
      
    });
  }
  setFocus(field: string) {
    const element = document.getElementById(field);
    if (element) {
      element.classList.add("input-group-focus");
    }
  }
  
  removeFocus(field: string) {
    const element = document.getElementById(field);
    if (element) {
      element.classList.remove("input-group-focus");
    }
  }
  


  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.valid);
      const userData = this.registerForm.value;
    
      // Enregistrer les données de l'utilisateur dans localStorage
      localStorage.setItem('userProfile', JSON.stringify(userData));
      console.log('Form Submitted:', this.registerForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
    console.log(this.registerForm.valid);
    this.registerForm.statusChanges.subscribe(status => {
      console.log('Form Status:', status);
    });

  }

}
