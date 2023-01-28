import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ActionComponent } from './action/action.component';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { DigitalOperatingModelComponent } from './digital-operating-model/digital-operating-model.component';
import { TalentComponent } from './talent/talent.component';
import { MoreComponent } from './more/more.component';
import { SoftwareComponent } from './software/software.component';
import { PlatformComponent } from './platform/platform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    ActionComponent,
    RegistrationComponent,
    DigitalOperatingModelComponent,
    TalentComponent,
    MoreComponent,
    SoftwareComponent,
    PlatformComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
