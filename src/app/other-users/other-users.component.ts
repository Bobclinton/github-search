import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-services/http.service';
import { Users } from '../classes/users';

@Component({
  selector: 'app-other-users',
  templateUrl: './other-users.component.html',
  styleUrls: ['./other-users.component.css'],
  providers: [HttpService],
})
export class OtherUsersComponent implements OnInit {
  userNameInput:string;
  otherUserDetails:Users;
  constructor(public httpService:HttpService) { }
  onSubmit() {    
    this.httpService.otherUsersDetails(this.userNameInput);
    this.otherUserDetails = this.httpService.otherUsersInfo;
    // this.httpService.otherUsersRepo(this.userNameInput)
  }
  ngOnInit() {
  }

}
