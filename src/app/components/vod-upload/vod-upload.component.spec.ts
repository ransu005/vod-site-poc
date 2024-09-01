import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodUploadComponent } from './vod-upload.component';

describe('VodUploadComponent', () => {
  let component: VodUploadComponent;
  let fixture: ComponentFixture<VodUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VodUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VodUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
