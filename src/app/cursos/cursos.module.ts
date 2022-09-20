import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { CursosRoutingModule } from './cursos-routing.module';
import { ListacursosComponent } from './listacursos/listacursos.component';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ListacursosComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CursosRoutingModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class CursosModule { }
