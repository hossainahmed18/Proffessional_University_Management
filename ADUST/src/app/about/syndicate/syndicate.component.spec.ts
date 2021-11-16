import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyndicateComponent } from './syndicate.component';

describe('SyndicateComponent', () => {
  let component: SyndicateComponent;
  let fixture: ComponentFixture<SyndicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyndicateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyndicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
