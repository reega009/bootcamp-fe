import { saveProduk, ProdukModel } from './../produk.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdukService } from './../produk.service';
import { ProdusenModel } from './../produsen.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-produk',
  templateUrl: './form-produk.component.html',
  styleUrls: ['./form-produk.component.css']
})
export class FormProdukComponent implements OnInit {

  formProduk : FormGroup
  listProdusen : ProdusenModel[]

  judul : string = 'Tambah'
  idProduk : number

  constructor(
    private _formBuilder : FormBuilder,
    private _produkService : ProdukService,
    private _router : Router,
    private activedRoute : ActivatedRoute
  ) {
    this.formProduk = _formBuilder.group({
      'produkId' : new FormControl(null),
      'produkNama' : new FormControl(null),
      'produkJenis' : new FormControl(null),
      'produkBerat' : new FormControl(null),
      'produsenId' : new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.list()

    // Memanggil FindById
    this.activedRoute.params.subscribe(route => {
      this.idProduk = route['id']
    })
    if(this.idProduk){
      this.findById()
      this.judul = 'Sunting'
    }
  }

  findById(){
    this._produkService.produkFindById(this.idProduk).subscribe(response => {
      this.formProduk.patchValue(response)
    })
  }

  list(){
    this._produkService.listProdusen().subscribe(response => {
      this.listProdusen = response["produsen"]
    })
  }

  save(){
    let produk : saveProduk = this.formProduk.value
    if(this.idProduk){
      produk.produkId = this.idProduk
      this._produkService.updateProduk(produk).subscribe(response => {
        if(response.status == 200){
          alert("Berhasil Edit Data")
          this._router.navigate(['/','produk'])
        }else{
          alert("Gagal Update Data")
        }
      })
    }else{
      this._produkService.saveProduk(produk).subscribe(response => {
        if(response.status == 200){
          alert("Berhasil Simpan Data")
          this._router.navigate(['/','produk'])
        }else{
          alert("Gagal Menyimpan Data")
        }
      })
    }

  }


}
