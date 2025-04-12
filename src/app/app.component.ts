import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  myForm: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder){
    ngOnInit(): void{
      this.myForm = this.formBuilder.group({
        name:['', Validators.required],
        email:['', [Validators.required,Validators.email]]
      })
    }
  }
}
