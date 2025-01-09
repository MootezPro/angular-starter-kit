import { Component } from '@angular/core';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {}
  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }
}
