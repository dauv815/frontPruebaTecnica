import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { CreditsComponent } from './private/credits/credits.component';
import { UsersComponent } from './private/users/users.component';

const routes: Routes = [
{
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'credits',
        component: CreditsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
