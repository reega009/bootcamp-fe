import { ProdusenModel } from './produsen.model';
import { environment } from './../../environments/environment';
import { ProdukModel, saveProduk } from './produk.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdukService {

  constructor(private http : HttpClient) { }

  list(){
    return this.http.get<ProdukModel[]>(`${environment.baseUrl}/produk/list`)
  }

  saveProduk(produk : saveProduk){
    return this.http.post(`${environment.baseUrl}/produk/save`, produk, {observe : "response"})
  }

  listProdusen(){
    return this.http.get<ProdusenModel[]>(`${environment.baseUrl}/produsen/list`)
  }

  produkFindById(produkId : Number){
    return this.http.get<ProdukModel>(`${environment.baseUrl}/produk/${produkId}`)
  }

  updateProduk(produk : saveProduk){
    return this.http.put(`${environment.baseUrl}/produk/sunting`, produk, {observe : "response"})
  }

  deleteProduk(produkId : Number){
    return this.http.delete(`${environment.baseUrl}/produk/delete/${produkId}`, {observe : "response"})
  }

}
