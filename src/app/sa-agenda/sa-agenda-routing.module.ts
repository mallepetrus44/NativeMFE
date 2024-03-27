import { NgModule } from '@angular/core';
import {SaAgendaComponent} from "./sa-agenda.component";
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  {
    path: '',
    component: SaAgendaComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaAgendaRoutingModule { }



