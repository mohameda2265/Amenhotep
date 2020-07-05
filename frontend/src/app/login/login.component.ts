import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [ApiService]
})
export class LoginComponent implements OnInit {
  login ;
  constructor(private api : ApiService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.login = {
      username : '',
      password : '',
    };
  }
  onLogin(){
    this.api.loginUser(this.login).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['home']);
      },
      error => {
        console.log('error ' , error);
      }
    );
  }

}
