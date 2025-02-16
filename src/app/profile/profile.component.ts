import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent  implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      civilite: [{ value: '', disabled: true }, Validators.required], // Civilité en lecture seule
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(\+33|0)[1-9](\d{2}){4}$/)]],
    });
  }

  ngOnInit(): void {
    // Récupérer les données de localStorage
    const savedProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    
    // Pré-remplir le formulaire avec les données récupérées
    if (savedProfile) {
      this.profileForm.patchValue(savedProfile);
    }
  }

  onSave(): void {
    if (this.profileForm.valid) {
      // Enregistrer les données dans localStorage si le formulaire est valide
      localStorage.setItem('userProfile', JSON.stringify(this.profileForm.value));
      alert('Profil mis à jour avec succès !');
    } else {
      alert('Formulaire invalide. Veuillez corriger les erreurs.');
    }
  }
}