import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { FigurasComponent } from './components/figuras/figuras.component';
import { LoginComponent } from './components/login/login.component';
import { NewFiguraComponent } from './components/new-figura/new-figura.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: BoardComponent},
  {path: 'new-figura', component: NewFiguraComponent},
  {path: 'figuras', component: FigurasComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
