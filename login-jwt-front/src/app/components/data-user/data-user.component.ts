import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios'


@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.scss']
})
export class DataUserComponent implements OnInit {
  id:any;
  nom: string;
  prenom: string;
  age: Int16Array;

  constructor(private router: Router) { }

   async ngOnInit() {
     console.log("Token verify: true")
    this.id = localStorage.getItem("id")
    await axios.get('http://localhost:8080/dataUser',{params:{id: this.id}}).then(res=>{
      this.nom = res.data[0].nom;
      this.prenom = res.data[0].prenom;
      this.age = res.data[0].age;
    })
  }

  onLogout(){
    localStorage.clear()
    this.router.navigateByUrl('/')
    console.log("Token delete: true")
  }
}
