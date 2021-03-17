import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toggleOnClick:boolean=false

  togglenav=()=>{
      if(this.toggleOnClick===false){
        this.toggleOnClick = true
        }else{
          this.toggleOnClick = false
        }
      console.log(this.toggleOnClick)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
