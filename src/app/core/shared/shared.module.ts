import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,

  LoaderComponent,
];
@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [],
})
export class SharedModule {}
