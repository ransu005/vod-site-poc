import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, 
    RouterOutlet,
    NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
