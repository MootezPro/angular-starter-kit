import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FooterComponent } from './footer/footer.component';
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { A11yModule } from '@angular/cdk/a11y';
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { PopoverModule } from "ngx-bootstrap/popover";
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { ProfileComponent } from './profile/profile.component'; // ✅ Vérifiez que ce chemin est correct

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    Page404Component,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,MatMenuModule,
    MatToolbarModule,
    TooltipModule,
    PopoverModule,
    CollapseModule,
    TabsModule,
    PaginationModule,
    AlertModule,
    BsDatepickerModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    A11yModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }), 
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line

  providers: [provideHttpClient(withInterceptorsFromDi()),AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
