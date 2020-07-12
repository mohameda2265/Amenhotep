import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [ApiService]
})
export class LoginComponent implements OnInit {
  login ;
  notSubmitted = false;
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
        localStorage.setItem('userToken',response.token)
        this.router.navigate(['employee']);
      },
      (err : HttpErrorResponse)=>{
        this.notSubmitted = true;
      }
    );
  }

}
