import { Routes } from '@angular/router';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo : 'login',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Inicio de sesion'
    },
    {
        path: 'registro',
        component: RegisterComponent,
        title: 'Registro'
    },
    {
        path: 'admin-table',
        component: AdminTableComponent,
        title: 'Admin Table'
    }
];
