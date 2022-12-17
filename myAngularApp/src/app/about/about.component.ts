import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  getName='';
  // To accept params that comes from app.Component.html
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe(data=>{
      this.getName=data['name'];
      console.log(this.getName);
    })
  }
}
