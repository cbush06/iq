import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamsComponent } from './exams/exams.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { 
        path: 'dashboard',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'exams', pathMatch: 'full', outlet: 'homeOutlet' },
            {
                path: 'exams',
                component: ExamsComponent,
                outlet: 'homeOutlet'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
