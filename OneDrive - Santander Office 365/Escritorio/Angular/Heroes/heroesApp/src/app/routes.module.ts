import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { Error404Component } from './shared/error404/error404.component';


const routes : Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule),
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]

  },
  {
    path:'404',
    component: Error404Component
  },
  {
    path:'**',
    redirectTo :'404'
  },
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutesModule { }
