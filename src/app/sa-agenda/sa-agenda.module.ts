import { NgModule } from '@angular/core';
import {SaAgendaComponent} from "./sa-agenda.component";
import {SaAgendaRoutingModule} from "./sa-agenda-routing.module";


@NgModule({
  declarations: [
    SaAgendaComponent
  ],
  imports: [
    SaAgendaRoutingModule,
  ],
})
export class SaAgendaModule { }
