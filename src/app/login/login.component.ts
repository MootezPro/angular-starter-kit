import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
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
  
  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e:any) {
    var squares1 = document.getElementById("square1")!;
    var squares2 = document.getElementById("square2")!;
    var squares3 = document.getElementById("square3")!;
    var squares4 = document.getElementById("square4")!;
    var squares5 = document.getElementById("square5")!;
    var squares6 = document.getElementById("square6")!;
    var squares7 = document.getElementById("square7")!;
    var squares8 = document.getElementById("square8")!;

    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }
  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe((success) => {
        console.log('Login success:', success); // ✅ Vérifier si la connexion réussit
        if (success) {
          this.router.navigate(['/']); // Redirection après connexion
        } else {
          alert('Email ou mot de passe incorrect');
        }
      });
    }
  }
}