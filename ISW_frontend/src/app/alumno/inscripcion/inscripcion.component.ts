import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [CommonModule, ToastrModule],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.scss'
})
export class InscripcionComponent {
  clasesInscritas = [];
  alumno = {
    id: 1,
    nombre: "Maximiliano Aguilera",
    matricula: "123456",
    carrera: "Ingenieria en Sistemas",
    creditos: 120,
    añoIngreso: 2024,
    semestreEnCurso: 2,
    clases: []
  };
  clases = [
    {id: 1,
    nombre: "Fisica",
    profesor: "Juan Delgado",
    horario: "Lunes 10:00 - 11:30",
    habilitada: true
    },
    {id: 2,
    nombre: "Matemáticas",
    profesor: "Roberto Salinas",
    horario: "Martes 08:00 - 09:30",
    habilitada: true
    },
    {id: 3,
    nombre: "Historia",
    profesor: "Sofía Parra",
    horario: "Jueves 11:30 - 13:00",
    habilitada: true
    },
    {id: 4,
    nombre: "Lenguaje y literatura",
    profesor: "Ignacio Rozas",
    horario: "Viernes 08:00 - 09:30",
    habilitada: true
    },
    {id: 5,
    nombre: "Artes visuales",
    profesor: "Karen Cuadra",
    horario: "Miercoles 11:30 - 13:00",
    habilitada: true
    },

  ]

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  inscribirClase(clase){
    let msgTexto = `Clase ${clase.nombre} Inscrita correctamente`;
    let msgTitle = 'Inscripción Exitosa!';

    this.clasesInscritas.push(clase);
    this.alumno.clases = this.clasesInscritas;
    clase.habilitada = false;
    console.log("Inscribiendo a la clase: ", this.alumno );
    this.showSuccess(msgTitle, msgTexto);
  }
  desinscribirClase(clase){
    let msgTexto = `Clase ${clase.nombre} Desinscrita correctamente`;
    let msgTitle = 'Desinscripción Exitosa!';
    this.clasesInscritas.forEach(c => {
      if(c.id === clase.id){
        this.clasesInscritas.splice(this.clasesInscritas.indexOf(c), 1);
      }
    });
    clase.habilitada = true;
    this.alumno.clases = this.clasesInscritas;
    console.log("Desiscribiendo la clase: ", this.alumno );
    this.showInfo(msgTitle, msgTexto);
  }

  showSuccess(title, texto) {
    this.toastr.success(texto, title);
  }
  showInfo(title, texto) {
    this.toastr.info(texto, title);
  }
}
