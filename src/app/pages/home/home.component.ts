import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}

  searchGithubUsers(value: string) {
    this.githubService.searchUsers().subscribe(
      (result) => {
        this.users = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
