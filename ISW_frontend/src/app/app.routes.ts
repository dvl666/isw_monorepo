import { Routes } from '@angular/router';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { InscripcionComponent } from './alumno/inscripcion/inscripcion.component';

export const routes: Routes = [
    {
        path: 'admin-table',
        component: AdminTableComponent,
        title: 'Admin Table'
    },
    {
        path: 'alumno-inscripcion',
        component: InscripcionComponent,
        title: 'Alumno Inscripción'
    }
];
