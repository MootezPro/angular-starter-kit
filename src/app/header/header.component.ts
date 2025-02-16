import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
target: any;
isLoggedIn = false;

constructor(private languageService: LanguageService, public authService: AuthService ,public  router: Router) {}
  isCollapsed = true;
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }
  ngOnInit() {
    if (this.authService) {
      this.authService.isLoggedIn().subscribe((status) => {
        console.log('Header status updated:', status); 
        this.isLoggedIn = status;
      });
    } else {
      console.error('AuthService is undefined'); 
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }
}