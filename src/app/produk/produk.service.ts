import { environment } from './../../environments/environment';
import { ProdukModel } from './produk.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdukService {

  constructor(private http : HttpClient) { }

  // list(){
  //   return this.http.get<ProdukModel[]>(`${environment.baseUrl}/produk/list`, {headers : {"Access-Control-Allow-Origin" : '*', "Access-Control-Allow-Headers" : "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization","Access-Control-Allow-Methods" : "GET, POST, OPTIONS, PUT, DELETE, PATCH"}})
  // }

  list(){
    return this.http.get<ProdukModel[]>(`api/produk/list`)
  }

}
