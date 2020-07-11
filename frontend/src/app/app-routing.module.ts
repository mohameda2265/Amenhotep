import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeControlComponent } from './employee-control/employee-control.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { AddOwnershipComponent } from './add-ownership/add-ownership.component';
import { ShopControlComponent } from './shop-control/shop-control.component';
import { FlatStoreDetailsComponent } from './flat-store-details/flat-store-details.component';
import { TowerDetailsComponent } from './tower-details/tower-details.component';
import { BlockDetailsComponent } from './block-details/block-details.component';
import { CompoundDetailsComponent } from './compound-details/compound-details.component';
import { RequestControlComponent } from './request-control/request-control.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { FamilyControlComponent } from './family-control/family-control.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { AddFamilyComponent } from './add-family/add-family.component';
import { OwnerControlComponent } from './owner-control/owner-control.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { AddFlatComponent } from './add-flat/add-flat.component';
import { AddTowerComponent } from './add-tower/add-tower.component';
import { AddCompoundComponent } from './add-compound/add-compound.component';
import { AddBlockComponent } from './add-block/add-block.component';
import { FlatControlComponent } from './flat-control/flat-control.component';
import { TowerControlComponent } from './tower-control/tower-control.component';
import { BlockControlComponent } from './block-control/block-control.component';
import { CompoundControlComponent } from './compound-control/compound-control.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
import { DetailsComponent } from './details/details.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { RequestsComponent } from './requests/requests.component';
import { MapsComponent } from './maps/maps.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'news', component: NewsComponent },
  { path: 'employee/news', component: NewsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'employee/offers', component: OffersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'offer-details/:id', component: OfferDetailsComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/compounds', component: CompoundControlComponent },
  { path: 'employee/blocks', component: BlockControlComponent },
  { path: 'employee/towers', component: TowerControlComponent },
  { path: 'employee/flats', component: FlatControlComponent },
  { path: 'employee/shops', component: ShopControlComponent },
  { path: 'employee/owners', component: OwnerControlComponent },
  { path: 'employee/family', component: FamilyControlComponent },
  { path: 'employee/owners/:oid', component: OwnerControlComponent },
  { path: 'employee/addcompounds', component: AddCompoundComponent },
  { path: 'employee/addcompounds/:cid', component: AddCompoundComponent },
  { path: 'employee/addblocks', component: AddBlockComponent },
  { path: 'employee/addblocks/:bid', component: AddBlockComponent },
  { path: 'employee/addtowers', component: AddTowerComponent },
  { path: 'employee/addtowers/:tid', component: AddTowerComponent },
  { path: 'employee/addflats', component: AddFlatComponent },
  { path: 'employee/addflats/:fid', component: AddFlatComponent },
  { path: 'employee/addshops', component: AddShopComponent },
  { path: 'employee/addshops/:sid', component: AddShopComponent },
  { path: 'employee/addownership/:sid', component: AddOwnershipComponent },
  { path: 'employee/addowners', component: AddOwnerComponent },
  { path: 'employee/addfamilymember/:oid', component: AddFamilyComponent },
  { path: 'employee/requests', component: RequestControlComponent },
  { path: 'employee/ownerdetails/:oid', component: OwnerDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employee/compounddetails/:cid', component: CompoundDetailsComponent },
  { path: 'employee/blockdetails/:bid', component: BlockDetailsComponent },
  { path: 'employee/towerdetails/:tid', component: TowerDetailsComponent },
  { path: 'employee/flatdetails/:fid',  component: FlatStoreDetailsComponent },
  { path: 'employee/shopdetails/:sid',  component: ShopDetailsComponent },
  { path: 'employee/addnews', component: AddNewsComponent },
  { path: 'employee/addnews/:nid',  component: AddNewsComponent },
  { path: 'employee/addoffers', component: AddOfferComponent },
  { path: 'employee/addemployees',  component: AddEmployeeComponent },
  { path: 'employee/addemployees/:eid', component: AddEmployeeComponent },
  { path: 'employee/employees', component: EmployeeControlComponent },
  { path: 'employee/employeedetails/:eid', component: EmployeeDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
