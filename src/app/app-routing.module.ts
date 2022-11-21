import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategorysServiceModule } from './services/categorys.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(
    [{ path: 'products', component: ProductListComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'cryptos', component: CryptoChipsComponent }]),
    ProductListComponentModule, ProductServiceModule,
    CategoryListComponentModule, CategorysServiceModule,
    CryptoChipsComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
