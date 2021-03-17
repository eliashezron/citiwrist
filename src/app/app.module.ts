import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { NavComponent } from './components/nav/nav.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterserviceService } from './registerservice.service';
import { LoginserviceService } from './loginservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ServicesComponent,
    NavComponent,
    TestimonialsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [RegisterserviceService,
             LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
