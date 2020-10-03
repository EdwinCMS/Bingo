import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FigurasComponent } from './components/figuras/figuras.component';
import { GruposFigurasComponent } from './components/grupos-figuras/grupos-figuras.component';
import { NewFiguraComponent } from './components/new-figura/new-figura.component';
import { EditFiguraComponent } from './components/edit-figura/edit-figura.component';
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }