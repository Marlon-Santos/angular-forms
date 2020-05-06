import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Info {
  nome: string;
  idade: number;
  email: string;
  confirmarEmail: string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  informacoes: Info = {
    nome: null,
    idade: null,
    email: null,
    confirmarEmail: null
  }

  ngOnInit(): void {
    console.log(this.informacoes);
  }

  onSubmit(form: NgForm): void{
    console.log(form);
  }
}
