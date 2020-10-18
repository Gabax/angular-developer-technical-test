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

  constructor(private githubService: GithubService, private router: Router) {}

  ngOnInit(): void {}

  searchGithubUsers(value: string) {
    this.users = this.githubService.getUsers();
  }

  userDetail(user) {
    this.router.navigate(['user', user.login]);
  }
}
