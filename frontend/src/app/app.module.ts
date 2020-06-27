import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MainComponent,
    NewsComponent,
    OffersComponent,
    DetailsComponent,
    OfferDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
