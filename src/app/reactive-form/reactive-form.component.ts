import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  form: FormGroup;

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl(null, [Validators.required]),
    //   email: new FormControl(null, [Validators.required]),
    // });
    const myForm = this.form;
    this.form = this.formBuilder.group({
      informacoes: {
        name: ['1'],
        idade: ['2'],
        email: ['3'],
        confirmarEmail: ['4'],
      },
      endereco: {
        cep: ['83430000'],
      },
    });
    if (myForm.valid) {
      this.onSubmit();
    }
  }

  onSubmit() {
    console.log('ok');
  }

  getCep(cep) {
    const url = `http://viacep.com.br/ws/${cep}/json`;
    this.http.get(url).subscribe((endereco) => {});
  }
}
