import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaAgendaComponent } from './sa-agenda.component';

describe('SaAgendaComponent', () => {
  let component: SaAgendaComponent;
  let fixture: ComponentFixture<SaAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaAgendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
