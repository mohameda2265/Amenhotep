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
import { AddBlockComponent } from './add-block/add-block.component';
import { AddCompoundComponent } from './add-compound/add-compound.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddFamilyComponent } from './add-family/add-family.component';
import { AddFlatComponent } from './add-flat/add-flat.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { AddOwnershipComponent } from './add-ownership/add-ownership.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { AddTowerComponent } from './add-tower/add-tower.component';
import { BlockControlComponent } from './block-control/block-control.component';
import { BlockDetailsComponent } from './block-details/block-details.component';
import { CompoundControlComponent } from './compound-control/compound-control.component';
import { CompoundDetailsComponent } from './compound-details/compound-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeControlComponent } from './employee-control/employee-control.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FamilyControlComponent } from './family-control/family-control.component';
import { FlatControlComponent } from './flat-control/flat-control.component';
import { FlatStoreDetailsComponent } from './flat-store-details/flat-store-details.component';
import { OwnerControlComponent } from './owner-control/owner-control.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { RequestControlComponent } from './request-control/request-control.component';
import { ShopControlComponent } from './shop-control/shop-control.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { TowerControlComponent } from './tower-control/tower-control.component';
import { TowerDetailsComponent } from './tower-details/tower-details.component';
import { BlockPipe } from './pipe/block.pipe';
import { CompoundFilterPipe } from './pipe/compound-filter.pipe';
import { EmployeePipe } from './pipe/employee.pipe';
import { FamilyPipe } from './pipe/family.pipe';
import { FlatPipe } from './pipe/flat.pipe';
import { OwnershipsPipe } from './pipe/ownerships.pipe';
import { ShopPipe } from './pipe/shop.pipe';
import { TowerPipe } from './pipe/tower.pipe';
import { RouterModule } from '@angular/router';
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
    LoginComponent,
    AddBlockComponent,
    AddCompoundComponent,
    AddEmployeeComponent,
    AddFamilyComponent,
    AddFlatComponent,
    AddNewsComponent,
    AddOfferComponent,
    AddOwnerComponent,
    AddOwnershipComponent,
    AddShopComponent,
    AddTowerComponent,
    BlockControlComponent,
    BlockDetailsComponent,
    CompoundControlComponent,
    CompoundDetailsComponent,
    EmployeeComponent,
    EmployeeControlComponent,
    EmployeeDetailsComponent,
    FamilyControlComponent,
    FlatControlComponent,
    FlatStoreDetailsComponent,
    OwnerControlComponent,
    OwnerDetailsComponent,
    RequestControlComponent,
    ShopControlComponent,
    ShopDetailsComponent,
    TowerControlComponent,
    TowerDetailsComponent,
    BlockPipe,
    CompoundFilterPipe,
    EmployeePipe,
    FamilyPipe,
    FlatPipe,
    OwnershipsPipe,
    ShopPipe,
    TowerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatRadioModule,
    RouterModule,
  ],
  providers: [
    CompoundFilterPipe,
    BlockPipe,
    TowerPipe,
    FlatPipe,
    ShopPipe,
    EmployeePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
