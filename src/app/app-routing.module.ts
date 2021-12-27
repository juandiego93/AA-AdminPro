import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing.module';

import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AuthRoutingModule } from './auth/auth.routing.module';

const routes: Routes = [
  // path:'/dashboard', PagesRoutingModule
  // path:'/auth', AuthRoutingModule
  { path: '**', component: NoPageFoundComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
