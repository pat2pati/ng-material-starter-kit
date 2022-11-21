import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { PublicHolidayListComponent } from './public-holiday-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
  declarations: [PublicHolidayListComponent],
  providers: [],
  exports: [PublicHolidayListComponent]
})
export class PublicHolidayListComponentModule {
}
