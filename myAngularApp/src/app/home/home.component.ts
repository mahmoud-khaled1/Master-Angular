import { Component,OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.myform.patchValue({
      fname:'mahmoud',
      Age:25
    })

  }
  add( f:NgForm){
    let data=f.value;
     console.log(f);
    console.log(data);
    console.log(data['firstName']);
  }

  //  Reactive Forms
  myform:any
  constructor(private formbuilder:FormBuilder){
    this.myform=this.formbuilder.group({
      fname:new FormControl('',Validators.required),
      Age:new FormControl,
       // Reactive Forms with form array and dynamic
       items:this.formbuilder.array([
        this.formbuilder.group({
          id:['1'],
          title:['']
        }),
        this.formbuilder.group({
          id:['2'],
          title:['']
        }),
       ])
    })
  }
  // myform=new FormGroup({
  //   fname:new FormControl('',Validators.required),
  //   Age:new FormControl,
  //   // Reactive Forms with form array and dynamic
  //   item:this.form
  // })

  print(){
    console.log(this.myform);
    console.log(this.myform.value);
  }
  // Reactive Forms Set and Get values
  get fname(){
    return this.myform.get('fname');
  }
  get Age(){
    return this.myform.get('Age');
  }

}
