import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSecurityGuard } from './guards/user-security.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EditarNotaComponent } from './pages/usuario/editar-nota/editar-nota.component';
import { ListaNotasComponent } from './pages/usuario/lista-notas/lista-notas.component';
import { ProfileComponent } from './pages/usuario/profile/profile.component';
import { SidebarComponent } from './pages/usuario/sidebar/sidebar.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'usuario', component: UsuarioComponent, canActivate:[UserSecurityGuard],
    children:[
        {path:'lista-notas',component:ListaNotasComponent},
        {path:'profile',component:ProfileComponent},
        {path:'sidebar',component:SidebarComponent},
        {path:'editar-nota/:id',component:EditarNotaComponent}


    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
