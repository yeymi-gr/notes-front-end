import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login-cmp.component.html',
  styleUrls: ['./login-cmp.component.css']
})
export class LoginCmpComponent implements OnInit {
  public list:Array<any>;
  public color:String;
  constructor() {
    this.list=[{nombre:"Pepito",edad:15},{nombre:"juanita",edad:30},{nombre:"lola",edad:10}];
    this.color="blue";
   }

  ngOnInit() {
  };


  
  

}
