import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Info {
  nome: string;
  idade: number;
  email: string;
  confirmarEmail: string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;

  constructor(private http: HttpClient) {}

  informacoes: Info = {
    nome: null,
    idade: null,
    email: null,
    confirmarEmail: null,
  };

  ngOnInit(): void {
    console.log(this.informacoes);
  }

  getCep(cep) {
    const url = `http://viacep.com.br/ws/${cep}/json`;
    this.http.get(url).subscribe((endereco) => {
      this.myForm.form.patchValue({ endereco });
    });
  }

  onSubmit(form: NgForm): void {
    console.log(form);
  }
}
