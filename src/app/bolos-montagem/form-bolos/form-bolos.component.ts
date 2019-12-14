import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BolosService } from '../shared/bolos.service';

@Component({
  selector: 'app-form-bolos',
  templateUrl: './form-bolos.component.html',
  styleUrls: ['./form-bolos.component.css']
})
export class FormBolosComponent implements OnInit {
  formMontagem: FormGroup;
  key: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private montagemService: BolosService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.criarFormulario();
    this.key = this.route.snapshot.paramMap.get('key');
    if (this.key) {
      const montagemSubscribe = this.montagemService.getByKey(this.key)
        .subscribe((montagem: any) => {

          montagemSubscribe.unsubscribe();

          this.formMontagem.setValue({ nome: montagem.nome });
        });
    }

  }

  get nome() { return this.formMontagem.get('nome'); }

  criarFormulario() {
    this.key = null;
    this.formMontagem = this.formBuilder.group({
      nome: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formMontagem.valid) {
      if (this.key) {
        this.montagemService.update(this.formMontagem.value, this.key);
      } else {
        this.montagemService.insert(this.formMontagem.value);
      }
      this.router.navigate(['bolos']);
      this.toastr.success('Categoria salva com sucesso!!!');
    }
  }

}
