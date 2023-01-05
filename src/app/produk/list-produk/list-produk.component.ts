import { ProdukModel } from './../produk.model';
import { ProdukService } from './../produk.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-produk',
  templateUrl: './list-produk.component.html',
  styleUrls: ['./list-produk.component.css']
})
export class ListProdukComponent implements OnInit {

  // dtElement: DataTableDirective;
  // dtOptions: any = {};

  judul : string = 'List Produk'
  listProduk : ProdukModel[]

  constructor(
    private _produkService : ProdukService
  ) { }

  ngOnInit(): void {
    this.getListProduk()
    // this.produkDatatables()
  }

  getListProduk() {
    this._produkService.list().subscribe(response => {
      this.listProduk = response["produk"]
      // Di bawah ini yang dipakai nanti projek
      // this.listProduk = response
      console.log(this.listProduk)
    })
  }

  deleteProduk(idProduk : number){
      this._produkService.deleteProduk(idProduk).subscribe(response => {
        if(response.status == 200){
            alert("Berhasil Menghapus Data")
            location.reload()
        }else{
            alert("Gagal Menghapus Data")
        }
      })
  }

  // produkDatatables(){
  //   this.dtOptions = {
  //     ajax: (dataTablesParameters: any, callback) => {
  //       this._produkService.list().subscribe( response => {
  //             if(response){
  //               callback({
  //                 recordsTotal: response.length,
  //                 data: response
  //               });
  //             }else{
  //               callback({
  //                 recordsTotal: 0,
  //                 data: []
  //               });
  //             }
  //         });
  //     },
  //     columns: [{
  //       title: 'Nama Produl',
  //       data: 'produkNama'
  //     }, {
  //       title: 'Jenis Produk',
  //       data: 'produkJenis'
  //     }, {
  //       title: 'Berat Produk',
  //       data: 'produkBerat'
  //     }, {
  //       title: 'Nama Produsen',
  //       data: 'produsenNama'
  //     }, {
  //       title: 'Kode Produsen',
  //       data: 'produsenKode'
  //     }, {
  //       title: 'Alamat Produsen',
  //       data: 'produsenAlamat'
  //     }]
  //   };
  // }
}

