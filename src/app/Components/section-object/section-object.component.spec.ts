import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionObjectComponent } from './section-object.component';

describe('SectionObjectComponent', () => {
  let component: SectionObjectComponent;
  let fixture: ComponentFixture<SectionObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
