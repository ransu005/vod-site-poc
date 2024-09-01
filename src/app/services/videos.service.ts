import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';

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
        "category": "Fiction"
      }
    ]
  };

  constructor() { 
  }

  getVideos() {
    return of(this.data.videos);
  }

}
