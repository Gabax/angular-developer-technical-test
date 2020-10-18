import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent implements OnInit {
  @Input() user;

  repos;
  followers;

  constructor(private gitHubService: GithubService) {}

  ngOnInit(): void {
    this.gitHubService.getUserRepos(this.user.login).subscribe(
      (result) => {
        this.repos = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadFollowers() {
    if (!this.followers) {
      this.gitHubService.getUserFollowers(this.user.login).subscribe(
        (result) => {
          this.followers = result;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
