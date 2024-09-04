import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.scss'
})
export class StreamComponent {

  videosService: any;
  vid: any;

  @Input()
  set videoId(videoId: number) {
    this.vid = this.videosService.getVideoById(videoId)[0];
  }

  constructor(videosService: VideosService) {
    this.videosService = videosService;
  }
}
