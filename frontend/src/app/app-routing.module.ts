import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AlertsComponent } from './alerts/alerts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'assets', component: AssetsListComponent},
  {path: 'alerts', component: AlertsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
