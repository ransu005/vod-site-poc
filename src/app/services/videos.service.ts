import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  data = {
    videos: [
      {
        "id": 1234,
        "title": "Test Title 1",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.",
        "category": "Fiction",
        "src": "assets/Sample_Video_File_100MB.mp4",
        "type": "video/mp4",
      }
    ]
  };

  constructor() { 
  }

  getVideos() {
    return of(this.data.videos);
  }

  getVideoById(videoId: number) {
    return this.data.videos.filter(video => (video.id.toString() === videoId.toString()));
  }
}
