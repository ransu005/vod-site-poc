import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NavigationComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  // styles: [`:host {display: block;}`]
})
export class HomeComponent implements OnInit {
  videos: any;
  videosService;

  constructor(videosService: VideosService) {
    this.videosService = videosService;
  }

  ngOnInit(): void {
    this.videosService.getVideos().subscribe(vid => {
      this.videos = vid
    });
  }
}