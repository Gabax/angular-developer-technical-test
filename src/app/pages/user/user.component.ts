import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: any;
  subscription: any;

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let username: string;

    this.route.params.subscribe((params) => {
      username = params['username'];

      this.githubService.getUser(username).subscribe(
        (result) => {
          this.user = result;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
