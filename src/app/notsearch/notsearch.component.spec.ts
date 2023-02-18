import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotsearchComponent } from './notsearch.component';

describe('NotsearchComponent', () => {
  let component: NotsearchComponent;
  let fixture: ComponentFixture<NotsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
