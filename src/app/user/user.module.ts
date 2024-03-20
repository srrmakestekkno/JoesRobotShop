import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For template driven forms.
import { SignInComponent } from './sign-in/sign-in.component'; 
import { TemplateFormControlsComponent } from './template-form-controls/template-form-controls.component';



@NgModule({
  declarations: [
    SignInComponent,
    TemplateFormControlsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }
