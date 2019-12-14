import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BolosService } from '../shared/bolos.service';

@Component({
  selector: 'app-list-bolos',
  templateUrl: './list-bolos.component.html',
  styleUrls: ['./list-bolos.component.css']
})
export class ListBolosComponent implements OnInit {
  montagem: Observable<any[]>;

  constructor(private montagemService: BolosService,
              private toastr: ToastrService
              ) { }

  ngOnInit() {
    this.montagem = this.montagemService.getAll();
  }

  remover(key: string) {
    this.montagemService.remove(key)
      .then( (mensagem) => {
        this.toastr.success('Categoria excluida com sucesso!');
      })
      .catch((mensagem: string) => {
        this.toastr.error(mensagem);
      });
  }

}
