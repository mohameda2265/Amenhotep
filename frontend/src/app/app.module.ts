import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { DetailsComponent } from './details/details.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { RequestsComponent } from './requests/requests.component';
import { MapsComponent } from './maps/maps.component';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MainComponent,
    NewsComponent,
    OffersComponent,
    DetailsComponent,
    OfferDetailsComponent,
    RequestsComponent,
    MapsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
