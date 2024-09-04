import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[ngVideoUpload]'
})
export class NgVideoUploadDirective {

  @Input() maxSize: number = 104857600; // 100MB in bytes
  @Output() videoUploaded = new EventEmitter<File>();

  constructor() { }

  @HostListener('change', ['$event.target.files']) handleVideoUpload(files: FileList) {
    const file = files.item(0);
    if (!file) return;

    // Check file type
    const allowedTypes = ['video/mp4', 'video/avi', 'video/mov'];
    if (!allowedTypes.includes(file.type)) {
      alert('Invalid file type. Only MP4, AVI and MOV are allowed.');
      return;
    }

    // Check file size
    if (file.size > this.maxSize) {
      alert('File size exceeds limit. Maximum allowed size is 100MB.');
      return;
    }

    // Emit event with file object
    this.videoUploaded.emit(file);
  }

}