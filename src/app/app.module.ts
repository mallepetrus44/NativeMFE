import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SaAgendaModule} from "./sa-agenda/sa-agenda.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SaAgendaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
