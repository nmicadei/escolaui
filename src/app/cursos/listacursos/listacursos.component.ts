import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';
import { CursosService } from '../cursos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})
export class ListacursosComponent implements OnInit {

  cursos: Observable<Curso[]>;
  displayedColumns = ['id','nomecurso'];


  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.list();

  }

  ngOnInit(): void {

  }

}
