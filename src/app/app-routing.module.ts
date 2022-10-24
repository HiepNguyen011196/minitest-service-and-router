import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from './employee/create/create.component';
import {ListComponent} from "./employee/list/list.component";
import {EditComponent} from "./employee/edit/edit.component";

const routes: Routes = [{
  path: 'employee/create',
    component: CreateComponent
  }, {
  path: 'employee/list',
  component: ListComponent
}, {
  path: 'employee/edit',
  component: EditComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
