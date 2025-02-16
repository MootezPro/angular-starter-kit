import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkLoginStatus());

  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    if (email === 'test@example.com' && password === 'password123') {
      localStorage.setItem('loggedIn', 'true');
      this.isLoggedInSubject.next(true); // ✅ Met à jour la valeur en direct
      return new Observable((observer) => {
        observer.next(true);
        observer.complete();
      });
    }
    return new Observable((observer) => {
      observer.next(false);
      observer.complete();
    });
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
    this.isLoggedInSubject.next(false); // ✅ Met à jour la valeur en direct
  }

  isLoggedIn(): Observable<boolean> {
    this.isLoggedInSubject.asObservable().subscribe(value => console.log('isLoggedIn changed:', value));
    return this.isLoggedInSubject.asObservable(); // ✅ Rend réactif
      }

  private checkLoginStatus(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}