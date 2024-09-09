import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import *  as _ from 'lodash';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class VideosService {

  data = {
    videos: [
      {
        "id": 1,
        "title": "Test Title 1",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.",
        "category": "Fiction",
        "src": "assets/Sample_Video_File_100MB.mp4",
        "type": "video/mp4",
      },
      {
        "id": 2,
        "title": "Test Title 2",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.",
        "category": "SciFi",
        "src": "assets/Sample_Video_File_100MB.mp4",
        "type": "video/mp4",
      },
      {
        "id": 3,
        "title": "Test Title 3",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.",
        "category": "Documentary",
        "src": "assets/Sample_Video_File_100MB.mp4",
        "type": "video/mp4",
      }
    ]
  };

  private api = environment.apiURL;
  categories$: any;

  constructor(private http: HttpClient) {}

  getVideos(): Observable<any> {
    const videos = this.http.get(this.api);

    if(!_.isNil(videos)) {
      return videos;
    } else {
      return of(this.data.videos)
    }
  }

  uploadVideo(video: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', video.file);
    formData.append('title', video.title);
    formData.append('description', video.description);
    formData.append('categories', video.categories.name);

    return this.http.post(`${this.api}/upload`, formData);
  }

  getVideoById(videoId: string) {
    const video = this.http.get(`${this.api}/${videoId}`);

    if(!_.isNil(video)) {
      return video;
    } else {
      return this.data.videos.filter(video => (video.id.toString() === videoId.toString()));
    }
  }

  getVideoCategories() {
    this.http.get(`${this.api}/category`).subscribe(categories => {
      this.categories$ = categories;
    });
  }
}
