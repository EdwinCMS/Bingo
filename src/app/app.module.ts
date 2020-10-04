import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//main
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FigurasComponent } from './components/figuras/figuras.component';
import { GruposFigurasComponent } from './components/grupos-figuras/grupos-figuras.component';
import { NewFiguraComponent } from './components/new-figura/new-figura.component';
import { EditFiguraComponent } from './components/edit-figura/edit-figura.component';
import { BoardComponent } from './components/board/board.component';
import { ModalidadComponent } from './components/modalidad/modalidad.component';
import { CuadriculaComponent } from './components/cuadricula/cuadricula.component';
import { CasillaComponent } from './components/casilla/casilla.component';
import { CasillaEstaticaComponent } from './components/casilla-estatica/casilla-estatica.component';
//secondary
import { NavbarComponent } from './subs-components/navbar/navbar.component';
import { FooterComponent } from './subs-components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    FigurasComponent,
    GruposFigurasComponent,
    NewFiguraComponent,
    EditFiguraComponent,
    NavbarComponent,
    FooterComponent,
    BoardComponent,
    ModalidadComponent,
    CuadriculaComponent,
    CasillaComponent,
    CasillaEstaticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
