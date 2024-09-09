import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgVideoUploadDirective } from '../../ngVideoUpload.directive';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-vod-upload',
  standalone: true,
  imports: [
    NgVideoUploadDirective,
    FormsModule
  ],
  templateUrl: './vod-upload.component.html',
  styleUrl: './vod-upload.component.scss',
})
export class VodUploadComponent {
  video = { 
    title: '',
    description: '',
    category: {
      name: ""
    },
    file: null };
  videoService;

  constructor (videosService: VideosService) {
    this.videoService = videosService;
  }

  uploadVideo() {
    this.videoService.uploadVideo(this.video)
  }
}

