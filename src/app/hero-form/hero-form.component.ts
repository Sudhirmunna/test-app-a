import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  list = [];

  model = new Hero(18, 3, 10);

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }



  onSubmit() {
    this.submitted = true;
  }


  printList(maxValue) {
    this.list = [];
    for (let i = 1; i < maxValue; i++) {
      this.list.push(i);
    }
    this.submitted = false;
    return this.list;
  }
}
