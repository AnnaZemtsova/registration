import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartFormComponent} from './start-form/start-form.component';
import {FirstPageComponent} from './first-page/first-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartFormComponent
  },
  {
    path: 'first_page',
    component: FirstPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
