import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'video-template',
  templateUrl: './video-template.component.html',
  styleUrls: ['./video-template.component.scss']
})
export class VideoTemplateComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;
  videoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
        break;
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl('https://www.vimeo.com/embed/' + this.key);
        break;
    }
  }
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
