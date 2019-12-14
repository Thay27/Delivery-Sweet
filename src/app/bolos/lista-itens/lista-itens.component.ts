import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItensService } from '../shared/itens.service';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListaItensComponent implements OnInit {
  itens: Observable<any[]>;

  constructor(private itensService: ItensService) { }

  ngOnInit() {
    this.itens = this.itensService.getAll();
  }

  remover(key: string, filePath: string) {
    this.itensService.remove(key, filePath);
  }

}
