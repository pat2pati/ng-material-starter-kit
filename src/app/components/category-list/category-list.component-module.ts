import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatCheckboxModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
  declarations: [CategoryListComponent],
  providers: [],
  exports: [CategoryListComponent]
})
export class CategoryListComponentModule {
}
