import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users;
  errorMessage: string = 'Type at least 3 characters.';
  showError: boolean = false;

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {}

  searchGithubUsers(value: string) {
    if (value.length >= 3) {
      this.githubService.searchUser(value).subscribe(
        (result) => {
          this.users = result['items'];
        },
        (error) => {
          console.log(error);
        }
      );
      this.showError = false;
    } else {
      this.showError = true;
    }
  }

  userDetail(user) {
    this.router.navigate(['user', user.login]);
  }
}
