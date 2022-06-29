import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit { 
  projects = [
  {
    title: 'Dad Joke Generator',
    image: '../../assets/dadJokeScreenshot.png',
    desc: 'Application that generates a dad joke on button click, if user creates a profile they can save their favorite jokes.',
    site: 'https://dad-jokester.web.app/',
    repo: 'https://github.com/Cosbo9/joke-generator',
  },
  {
    title: 'Team Builder App',
    image: '../../assets/VizScreenshot.png',
    desc: 'Application used to create new teams and members, organize team members, and check member details.',
    site: 'https://employ-project.herokuapp.com/',
    repo: 'https://github.com/codelabsone/VizTeams-2021-2022'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
