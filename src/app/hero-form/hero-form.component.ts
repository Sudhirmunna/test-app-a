import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  list = [];
  form: FormGroup;



  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }



  onSubmit() {
    var obj = Object.assign({}, this.form.value);
   
    Object.keys(obj).forEach(key => obj[key] == undefined || obj[key] == '' ? delete obj[key] : '');
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.printList(this.form.controls.green.value);
  }

  get f() { return this.form.controls; }

  createForm() {
    this.form = this.formBuilder.group({
      blue: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      yellow: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      green: ['', [Validators.required, Validators.min(1)]]
    })
  }


  printList(maxValue) {
    this.list = [];
    for (let i = 1; i < maxValue; i++) {
      this.list.push(i);
    }
    return this.list;
  }
}
