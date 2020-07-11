import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseurl = 'http://127.0.0.1:8080';
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  addNews(news): Observable<any> {
    const body = {
      Title: news.Title,
      Desc: news.Desc,
    };
    return this.http.post(this.baseurl + '/api/news/new/', body, {
      headers: this.httpHeaders,
    });
  }
  addOffers(offer): Observable<any> {
    const body = {
      Title: offer.Title,
      Desc: offer.Desc,
      Cost: offer.Cost,
      Duration: offer.Duration,
      minPayment: offer.minPayment,
      Installement: offer.Installement,
    };
    return this.http.post(this.baseurl + '/api/offers/new/', body, {
      headers: this.httpHeaders,
    });
  }

  updateNews(news, nid): Observable<any> {
    return this.http.put(this.baseurl + '/api/news/edit/' + nid + '/', news, {
      headers: this.httpHeaders,
    });
  }

  addNewCompund(compound): Observable<any> {
    const body = {
      Number: compound.Number,
      Name: compound.Name,
      Address: compound.Address,
      Latitude: compound.Latitude,
      Longitude: compound.Longitude,
      Area: compound.Area,
      Desc: compound.Desc,
    };
    return this.http.post(this.baseurl + '/api/compound/new/', body, {
      headers: this.httpHeaders,
    });
  }

  addNewBlock(block): Observable<any> {
    const body = {
      compound: block.compound,
      Number: block.Number,
      Area: block.Area,
      Desc: block.Desc,
      towersNumber: block.towersNumber,
    };
    console.log(body);
    return this.http.post(this.baseurl + '/api/block/new/', body, {
      headers: this.httpHeaders,
    });
  }

  addNewTower(tower): Observable<any> {
    const body = {
      Number: tower.Number,
      Name: tower.Name,
      block: tower.block,
      Area: tower.Area,
      Notes: tower.Notes,
      Cost: tower.Cost,
      flatsNumber: tower.flatsNumber,
      floorsNumber: tower.floorsNumber,
      storesNumber: tower.storesNumber,
      owner: +tower.owner,
      Type: tower.Type,
    };
    console.log(body);
    return this.http.post(this.baseurl + '/api/tower/new/', body, {
      headers: this.httpHeaders,
    });
  }

  addNewFlat(flat): Observable<any> {
    const body = {
      Number: flat.Number,
      owner: flat.owner,
      Area: flat.Area,
      floorNumber: flat.floorNumber,
      Inhabited: flat.Inhabited,
      tower: flat.tower,
    };
    console.log(body);
    return this.http.post(this.baseurl + '/api/flat/new/', body, {
      headers: this.httpHeaders,
    });
  }

  addNewShop(shop): Observable<any> {
    const body = {
      Name: shop.Name,
      Number: shop.Number,
      floorNumber: shop.floorNumber,
      Desc: shop.Desc,
      Type: shop.Type,
      tower: shop.tower,
    };
    console.log(body);
    return this.http.post(this.baseurl + '/api/store/new/', body, {
      headers: this.httpHeaders,
    });
  }

  addOwnership(owenership): Observable<any> {
    const body = {
      store: owenership.store,
      owner: owenership.owner,
    };
    console.log(body);
    return this.http.post(this.baseurl + '/api/ownershipstore/new/', body, {
      headers: this.httpHeaders,
    });
  }

  addNewOwner(owner): Observable<any> {
    const body = {
      NID: owner.NID,
      Name: owner.Name,
      Proof: owner.Proof,
      Birthdate: owner.Birthdate,
      Mobile: owner.Mobile,
      DSL: owner.DSL,
      Avatar: owner.Avatar,
      Type: owner.Type,
      Notes: owner.Notes,
    };
    console.log(body);
    return this.http.post(this.baseurl + '/api/owner/new/', body, {
      headers: this.httpHeaders,
    });
  }

  addNewEmployee(employee): Observable<any> {
    const body = {
      NID: employee.NID,
      Name: employee.Name,
      Birthdate: employee.Birthdate,
      Mobile: employee.Mobile,
      DSL: employee.DSL,
      Address: employee.Address,
      jobDesc: employee.jobDesc,
    };
    console.log(body);
    return this.http.post(this.baseurl + '/api/employee/new/', body, {
      headers: this.httpHeaders,
    });
  }

  updateOwner(owner, oid): Observable<any> {
    return this.http.put(this.baseurl + '/api/owner/edit/' + oid + '/', owner, {
      headers: this.httpHeaders,
    });
  }

  updateEmployee(employee, eid): Observable<any> {
    return this.http.put(this.baseurl + '/api/employee/edit/' + eid, employee, {
      headers: this.httpHeaders,
    });
  }

  updateCompound(compound, cid): Observable<any> {
    return this.http.put(
      this.baseurl + '/api/compound/edit/' + cid + '/',
      compound,
      {
        headers: this.httpHeaders,
      }
    );
  }

  updateBlock(block, bid): Observable<any> {
    return this.http.put(this.baseurl + '/api/block/edit/' + bid + '/', block, {
      headers: this.httpHeaders,
    });
  }

  updateTower(tower, tid): Observable<any> {
    return this.http.put(this.baseurl + '/api/tower/edit/' + tid + '/', tower, {
      headers: this.httpHeaders,
    });
  }

  updateFlat(flat, fid): Observable<any> {
    return this.http.put(this.baseurl + '/api/flat/edit/' + fid + '/', flat, {
      headers: this.httpHeaders,
    });
  }

  updateShop(shop, sid): Observable<any> {
    return this.http.put(this.baseurl + '/api/store/edit/' + sid + '/', shop, {
      headers: this.httpHeaders,
    });
  }

  updateOwnership(ownership, sid): Observable<any> {
    return this.http.put(
      this.baseurl + '/api/ownershipstore/edit/' + sid + '/',
      ownership,
      {
        headers: this.httpHeaders,
      }
    );
  }

  deleteCompound(cid): Observable<any> {
    return this.http.delete(
      this.baseurl + '/api/compound/delete/' + cid + '/',
      {
        headers: this.httpHeaders,
      }
    );
  }

  deleteOwner(id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/owner/delete/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  deleteEmployee(id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/employee/delete/' + id, {
      headers: this.httpHeaders,
    });
  }

  deleteMember(id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/family/' + id + '/delete', {
      headers: this.httpHeaders,
    });
  }

  deleteOwnership(id): Observable<any> {
    return this.http.delete(
      this.baseurl + '/api/ownershipstore/delete/' + id + '/',
      {
        headers: this.httpHeaders,
      }
    );
  }

  addNewFamilyMember(family, oid): Observable<any> {
    const body = {
      owner: oid,
      NID: family.NID,
      Name: family.Name,
      Proof: family.Proof,
      Birthdate: family.Birthdate,
      Relationship: family.Relationship,
    };
    console.log(body);
    return this.http.post(this.baseurl + '/api/family/new/', body, {
      headers: this.httpHeaders,
    });
  }

  getAllNews(): Observable<any> {
    return this.http.get(this.baseurl + '/api/news/', {
      headers: this.httpHeaders,
    });
  }

  getAllCompunds(): Observable<any> {
    return this.http.get(this.baseurl + '/api/compound/', {
      headers: this.httpHeaders,
    });
  }

  getCompund(cid): Observable<any> {
    return this.http.get(this.baseurl + '/api/compound/' + cid + '/', {
      headers: this.httpHeaders,
    });
  }

  getAllBlocks(): Observable<any> {
    return this.http.get(this.baseurl + '/api/block/', {
      headers: this.httpHeaders,
    });
  }

  getBlock(bid): Observable<any> {
    return this.http.get(this.baseurl + '/api/block/' + bid + '/', {
      headers: this.httpHeaders,
    });
  }

  getTower(tid): Observable<any> {
    return this.http.get(this.baseurl + '/api/tower/' + tid + '/', {
      headers: this.httpHeaders,
    });
  }

  getAllTowers(): Observable<any> {
    return this.http.get(this.baseurl + '/api/tower/', {
      headers: this.httpHeaders,
    });
  }

  getAllFlats(): Observable<any> {
    return this.http.get(this.baseurl + '/api/flat/', {
      headers: this.httpHeaders,
    });
  }

  getAllShops(): Observable<any> {
    return this.http.get(this.baseurl + '/api/store/', {
      headers: this.httpHeaders,
    });
  }

  getAllOwners(): Observable<any> {
    return this.http.get(this.baseurl + '/api/owner/', {
      headers: this.httpHeaders,
    });
  }
  getAllEmployees(): Observable<any> {
    return this.http.get(this.baseurl + '/api/employee/', {
      headers: this.httpHeaders,
    });
  }

  getAllStoreOwnerships(): Observable<any> {
    return this.http.get(this.baseurl + '/api/ownershipstore/', {
      headers: this.httpHeaders,
    });
  }

  getOwner(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/owner/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  getEmployee(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/employee/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  getFlat(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/flat/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
  getShop(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/store/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  getFamilyMembers(): Observable<any> {
    return this.http.get(this.baseurl + '/api/family/', {
      headers: this.httpHeaders,
    });
  }

  getOneNews(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/news/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  getAllOffers(): Observable<any> {
    return this.http.get(this.baseurl + '/api/offers/', {
      headers: this.httpHeaders,
    });
  }

  getOneOffer(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/offers/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  createRequest(newRequest): Observable<any> {
    const today = new Date();
    let nowDate = '';
    let test = '';
    let z = 'Z';
    test = formatDate(today, 'yyyy-MM-ddThh:mm:00', 'en-US', 'zzzz');
    nowDate = test + z;
    console.log(newRequest);

    const body = {
      Title: newRequest.Title,
      Desc: newRequest.Desc,
      Type: newRequest.Type,
      created_date: nowDate,
      Email: newRequest.Email,
      Mobile: newRequest.Mobile,
    };
    return this.http.post(this.baseurl + '/api/requests/new/', body, {
      headers: this.httpHeaders,
    });
  }

  getAllRequests(): Observable<any> {
    return this.http.get(this.baseurl + '/api/requests/', {
      headers: this.httpHeaders,
    });
  }

  deleteRequest(id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/requests/delete/' + id + '/', {
      headers: this.httpHeaders,
    });
  }

  deleteBlock(bid): Observable<any> {
    return this.http.delete(this.baseurl + '/api/block/delete/' + bid + '/', {
      headers: this.httpHeaders,
    });
  }

  deleteTower(tid): Observable<any> {
    return this.http.delete(this.baseurl + '/api/tower/delete/' + tid + '/', {
      headers: this.httpHeaders,
    });
  }

  deleteFlat(fid): Observable<any> {
    return this.http.delete(this.baseurl + '/api/flat/delete/' + fid + '/', {
      headers: this.httpHeaders,
    });
  }

  deleteShop(sid): Observable<any> {
    return this.http.delete(this.baseurl + '/api/store/delete/' + sid + '/', {
      headers: this.httpHeaders,
    });
  }

  loginUser(userData): Observable<any>{
    const body = { username : userData.username , password : userData.password }
    return this.http.post(this.baseurl + '/api/login/' , body , {headers : this.httpHeaders});
  }
}
