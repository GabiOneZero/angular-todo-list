import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./tasks/tasks.module').then(
        (moduleRoute) => moduleRoute.TasksModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (moduleRoute) => moduleRoute.HomeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
