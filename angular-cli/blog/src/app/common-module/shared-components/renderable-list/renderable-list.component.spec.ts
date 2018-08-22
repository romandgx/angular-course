import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderableListComponent } from './renderable-list.component';

describe('RenderableListComponent', () => {
  let component: RenderableListComponent;
  let fixture: ComponentFixture<RenderableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
