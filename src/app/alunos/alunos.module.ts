import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { ListaalunosComponent } from './listaalunos/listaalunos.component';
import {MatCardModule} from '@angular/material/card';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    ListaalunosComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class AlunosModule { }
