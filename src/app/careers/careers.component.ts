import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  careersForm!: any;
  ngOnInit(): void {
    this.careersForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      skills: ['', Validators.required],
    });
  }

  onSubmit() {}
}
