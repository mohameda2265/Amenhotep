import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { DetailsComponent } from './details/details.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';


const routes: Routes = [
  {path: 'home', component: MainComponent },
  {path: 'news', component: NewsComponent },
  {path: 'offers', component: OffersComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: 'details/:id', component: DetailsComponent },
  {path: 'offer-details/:id', component: OfferDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
