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
  {
    title: "Youth Coding League landing page",
    image: "../../assets/YCLhome.png",
    desc: "Landing page for the Youth Coding League, an orginaztion that focus on tech education for young students.",
    site: "https://www.youthcodingleague.com/"
  },
  {
    title: "Combine 4",
    image: "../../assets/Combine4.png",
    desc: "A connect 4 type game that can be played with other live players. I made this with my class in my code course but was not able to get it live yet.",
    repo: "https://github.com/Cosbo9/Game-Project"
  },
  {
    title: "My Portfolio",
    image: "../../assets/portfolio.png",
    desc: "This site which was built using Angular.",
    site: "https://caleb-osborn.herokuapp.com",
    repo: "https://github.com/Cosbo9/portfolio"
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
