import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router, private authServeice: AuthService) {}

  ngOnInit(): void {

  }

  login() {
    //  this.router.navigate(['./heroes']);
    this.authServeice.login().subscribe(respuesta => {
      console.log(respuesta);

      if(respuesta.id){
        this.router.navigate(['./heroes'])
      }
    })
  
  }
}
