import { Component } from '@angular/core';
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
  styles: [`:host {display: block;}`]
})
export class HomeComponent {
  videos: any;

  constructor(videosService: VideosService) {
    videosService.getVideos().subscribe(vid => {
        this.videos = vid
      }
    );
  }
}

