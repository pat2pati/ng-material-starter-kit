import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { CategorysService } from '../../services/categorys.service';

@Component({
  selector: 'app-category-list',
  styleUrls: ['./category-list.component.scss'],
  templateUrl: './category-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent {
  readonly list$: Observable<CategoryModel[]> = this._categorysService.getAll();

  constructor(private _categorysService: CategorysService) {
  }
}
