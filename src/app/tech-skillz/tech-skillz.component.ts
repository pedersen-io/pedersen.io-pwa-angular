import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-skillz',
  templateUrl: './tech-skillz.component.html',
  styleUrls: ['./tech-skillz.component.scss']
})
export class TechSkillzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  yearsExperience(year: any) {
    return year
  }
}
