import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHiComponent } from './banner-hi.component';

describe('BannerHiComponent', () => {
  let component: BannerHiComponent;
  let fixture: ComponentFixture<BannerHiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerHiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerHiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
