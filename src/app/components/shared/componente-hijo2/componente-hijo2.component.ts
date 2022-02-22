import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-componente-hijo2',
  templateUrl: './componente-hijo2.component.html',
  styleUrls: ['./componente-hijo2.component.css'],
  providers: [UserService]
})
export class ComponenteHijo2Component implements OnInit {

  user: any;

  constructor(
    private _userService : UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe({
      next: (data) => {
        console.log(data);
        this.user = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    })
  }

}
