import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import axios from 'axios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private fb: FormBuilder, private router: Router){}

  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      pwd: ['']
    })
  }

  async onSubmit(data){
    await axios.post('http://localhost:8080/login',data).then(res=>{
      if(res.data.user == true){
      localStorage.setItem("accessToken",res.data.accesstoken)
      localStorage.setItem("id",res.data.id)
      this.router.navigateByUrl('home')
      }
      else console.log("Compte incorrecte: token non créé")
    })
    
  }

}
