import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  text: string = ' ';
  dayTime: string = '';
  reminder: boolean = false;

  courses: string[] = [];
  errorMsg: string = '';

  constructor() {}

  ngOnInit(): void {}

  addCourse(): void {
    if (this.text.length > 2) {
      this.courses.push(this.text);
      this.text = '';
      this.errorMsg = '';
    } else {
      this.errorMsg = 'Input must be 2 or more characters';
    }
  }

  checkArrayLength(): boolean {
    return this.courses.length > 0 ? true : false;
  }
}
