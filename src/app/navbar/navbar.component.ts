import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {

    matIconRegistry
      .addSvgIcon('bitbucket',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/bitbucket.svg'))
      .addSvgIcon('codefights',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/codefights.svg'))
      .addSvgIcon('docker',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/docker.svg'))
      .addSvgIcon('file-pdf-box',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/file-pdf-box.svg'))
      .addSvgIcon('github-box',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github-box.svg'))
      .addSvgIcon('hackerrank',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/hackerrank.svg'))
      .addSvgIcon('hammer',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/hammer.svg'))
      .addSvgIcon('jenkins',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/jenkins.svg'))
      .addSvgIcon('jira',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/jira.svg'))
      .addSvgIcon('linkedin-box',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/linkedin-box.svg'))
      .addSvgIcon('microsoft',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/microsoft.svg'))
      .addSvgIcon('stackoverflow',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/stackoverflow.svg'))
      .addSvgIcon('twitter-box',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/twitter-box.svg'))
      .addSvgIcon('udemy',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/udemy.svg'))
      ;
  }

  ngOnInit() {

  }

}
