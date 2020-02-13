import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor( private userService:UsersService) { }
// // newUsersArray=[...this.userService.users];
// newUsersArray=[];
  addUser(name,email,password)
  {
    this.userService.users.push({ id:this.userService.users.length+1,
    name:name.value,
    email:email.value,
    password:password.value,
    history:[],
    favs:[]
  })
  console.log(this.userService.users)
  }

  ngOnInit() {
  }

}
