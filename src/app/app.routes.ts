import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VodUploadComponent } from './components/vod-upload/vod-upload.component';
import { StreamComponent } from './components/stream/stream.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'vod-upload', component: VodUploadComponent },
    { path: 'stream/:item', component: StreamComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**',   redirectTo: '/home', pathMatch: 'full' },
];
