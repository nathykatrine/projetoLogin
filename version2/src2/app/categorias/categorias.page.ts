import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  itens: Object;

  constructor() { }

  ngOnInit() {
    this.itens= [
      {
      "id":1,
      "name": "Banco de Dados",
      "icon": "bdicon"
      },
      {
      "id":2,
      "name": "Câmera",
      "icon": "camicon"
      },
      {
        "id":3,
        "name": "Abacaxi",
        "icon": "abaicon"
       }
    ]
  }

}
