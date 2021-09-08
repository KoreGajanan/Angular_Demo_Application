import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SrcNgRoutingComponent } from './src-ng-routing/src-ng-routing.component';

const routes: Routes = [
  { path : 'batches', component : SrcNgRoutingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
