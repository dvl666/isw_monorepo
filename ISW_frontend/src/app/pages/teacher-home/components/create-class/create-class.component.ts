import { Component } from '@angular/core';
import { TeacherNavbarComponent } from "../teacher-navbar/teacher-navbar.component";
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-create-class',
  standalone: true,
  imports: [
    TeacherNavbarComponent,
    CommonModule,
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatButton,
    MatIconModule,
    RouterModule,
    MatDatepickerModule
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './create-class.component.html',
  styleUrl: './create-class.component.scss'
})
export class CreateClassComponent {

  classForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly toastr: ToastrService,
  ) {
    this.classForm = this.fb.group({
      title: ['', [Validators.required]],
      theme: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dateClass: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if(this.classForm.valid) {
      const classToCreate: any = {
        title: this.classForm.get('title')!.value,
        theme: this.classForm.get('theme')!.value,
        description: this.classForm.get('description')!.value,
        dateClass: this.classForm.get('dateClass')!.value,
        startTime: this.classForm.get('startTime')!.value,
        endTime: this.classForm.get('endTime')!.value,
      }
      console.log(typeof(classToCreate.dateClass))
    }
  }

}
