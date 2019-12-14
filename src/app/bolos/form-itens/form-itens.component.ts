import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItensService } from '../shared/itens.service';
import { BolosService } from 'src/app/bolos-montagem/shared/bolos.service';

@Component({
  selector: 'app-form-itens',
  templateUrl: './form-itens.component.html',
  styleUrls: ['./form-itens.component.css']
})
export class FormItensComponent implements OnInit {
  formBolos: FormGroup;
  key: string;
  montagem: Observable<any[]>;

  private file: File = null;
  filePath = '';
  result: void;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private montagemService: BolosService,
    private itensService: ItensService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.criarFormulario();
    this.montagem = this.montagemService.getAll();

    this.key = this.route.snapshot.paramMap.get('key');
    if (this.key) {
      const subscribe = this.itensService.getByKey(this.key)
        .subscribe((bolos: any) => {

          subscribe.unsubscribe();
          this.formBolos.setValue({
            nome: bolos.nome,
            preco: bolos.preco,
            montagemKey: bolos.montagemKey,
            montagemNome: bolos.montagemNome,
          });
        });
    }

  }

  get nome() { return this.formBolos.get('nome'); }
  get preco() { return this.formBolos.get('preco'); }
  get montagemKey() { return this.formBolos.get('montagemKey'); }
  get montagemNome() { return this.formBolos.get('montagemNome'); }


  criarFormulario() {
    this.key = null;
    this.formBolos = this.formBuilder.group({
      nome: ['', Validators.required],
      preco: ['', Validators.required],
      montagemKey: ['', Validators.required],
      montagemNome: [''],
    });

  }


  setCategoriaNome(montagem: any) {
    if (montagem && this.formBolos.value.montagemKey) {
      const montagemNome = montagem[0].text;
      this.montagemNome.setValue(montagemNome);
    } else {
      this.montagemNome.setValue('');
    }
  }

  onSubmit() {
    if (this.formBolos.valid) {
      let result: Promise<{}>;

      if (this.key) {
        result = this.itensService.update(this.formBolos.value, this.key);
      } else {
        result = this.itensService.insert(this.formBolos.value);
      }

      } else {
        this.criarFormulario();
      }

      this.router.navigate(['bolos']);
      this.toastr.success('Produtos salvo com sucesso!!!');
    }
  }


