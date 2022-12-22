import { ProdukModel } from './../produk.model';
import { ProdukService } from './../produk.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.component.html',
  styleUrls: ['./list-produk.component.css']
})
export class ListProdukComponent implements OnInit {

  judul : string = 'List Produk'
  listProduk : ProdukModel[]

  constructor(
    private _produkService : ProdukService
  ) { }

  ngOnInit(): void {
    this.getListProduk()
  }

  getListProduk() {
    console.log("test")
    this._produkService.list().subscribe({
      next : response => {
        this.listProduk = response
        console.log(this.listProduk)
      },
      error: err => {
        console.log(err)
      }
    })
  }

}
