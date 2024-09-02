import { Component } from '@angular/core';
import { NgVideoUploadDirective } from '../../ngVideoUpload.directive';

@Component({
  selector: 'app-vod-upload',
  standalone: true,
  imports: [NgVideoUploadDirective],
  templateUrl: './vod-upload.component.html',
  styleUrl: './vod-upload.component.scss',
})
export class VodUploadComponent {
}

