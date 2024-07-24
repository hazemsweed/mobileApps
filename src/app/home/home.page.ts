import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  saveURL: SafeResourceUrl = '';
  
  constructor(private sanitizer: DomSanitizer,) {}

  ngOnInit(): void {
    this.saveURL = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/GwW_uVeZXFk`);
  }

}
