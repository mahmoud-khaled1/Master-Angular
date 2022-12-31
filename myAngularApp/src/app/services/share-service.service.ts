import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  data={
    name:'mahmoud',
    lastName:'khaled',
    country:'cairo'
  };
  url='www.google.com';
  constructor() {

   }
   print()
   {
    console.log(this.data.name);
    console.log(this.url);
   }
}
