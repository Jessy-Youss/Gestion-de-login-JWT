import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token: any
  constructor(private router: Router){}

  ngOnInit(): void {
    this.token = localStorage.getItem("accessToken")
    console.log("Token créé: "+this.token)
  }

  async showData(){
    await axios.post('http://localhost:8080/tokenVerify',{accesstoken:this.token}).then(res=>{
      if(res.data == true) this.router.navigateByUrl('dataUser')
      else{ 
        console.log("Token expired")
        localStorage.clear()
        this.router.navigateByUrl('/login')
        }
    })

  }

}
