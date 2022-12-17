import { Routes, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  getName='';
  constructor(private route:ActivatedRoute){
    this.route.queryParams.subscribe(data=>{
      this.getName=data['name'];
      console.log(data['name']);
    })
  }
}
