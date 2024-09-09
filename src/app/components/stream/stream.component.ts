import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.scss'
})
export class StreamComponent implements OnInit {

  videosService: any;
  vid: any;
  id: number | undefined;

  @Input()
  set videoId(videoId: number) {
    this.id = videoId;
  }

  constructor(videosService: VideosService) {
    this.videosService = videosService;
  }
  ngOnInit(): void {
    this.vid = this.videosService.getVideoById(this.id)[0];
  }
}
