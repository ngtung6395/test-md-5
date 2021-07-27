import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './book/create/create.component';
import { DeleteComponent } from './book/delete/delete.component';
import { DetailComponent } from './book/detail/detail.component';
import { EditComponent } from './book/edit/edit.component';
import { ListBookComponent } from './book/list-book/list-book.component';

const routes: Routes = [
  {path:'', component:ListBookComponent},
  {path:'create',component:CreateComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'delete/:id',component:DeleteComponent},
  {path:'detail/:id',component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
