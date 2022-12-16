# Master-Angular
Angular From Zero To Dragon : taking you through an adventure with Angular framework. The course includes alot of topics that helps you to work with Angular without previous knowledge with it.
<br>
<br>
<br>

![main-qimg-3d2a60f972904b5dd34a3f99a31dc0c2-lq](https://user-images.githubusercontent.com/43557035/207872097-f730899c-4247-401b-9744-ae372b2058ba.jpg)
<br>
<br>
 CLI Overview and Command Reference :
 https://angular.io/cli
<br>
<h2>- Data Binding Interpolation</h2>


<br>![DataBinding](https://user-images.githubusercontent.com/43557035/208134239-39db2556-76f8-43d1-b6a5-5ba6acf8b016.JPG)

1-String interpolation : <br>
In general, String interpolation is the process of formatting or manipulating strings. In Angular, Interpolation is used to display data from component to view (DOM). It is denoted by the expression of {{ }} and also known as mustache syntax.
<br>
<br>
2-Property Binding :<br>
Property binding is used to bind the data from property of a component to DOM elements. It is denoted by [].
<br>
Let’s understand with a simple example.<br>
Add the below code in test.component.ts file.<br>
```
export class TestComponent { 
   userName:string = "Peter"; 
}
```
<br>
Add the below changes in view test.component.html,
<br>

```
<input type="text" [value]="userName">

```
<br>
<br>
3-Event binding :<br>
Events are actions like mouse click, double click, hover or any keyboard and mouse actions. If a user interacts with an application and performs some actions, then event will be raised. It is denoted by either parenthesis () or on-. We have different ways to bind an event to DOM element. Let’s understand one by one in brief.<br>

```
Add the below changes in view test.component.html,

<h1>{{number}}</h1>
<button (click)="inc()">Increment</button>
<button (click)="dec()">Decreament</button>
Add the below code in test.component.ts file.<br>

  inc()
  {
    this.number++;
  }
  dec()
  {
    this.number--;
  }
  
  ```
  <br>
<br>
3-Two-way data binding :<br>
Two-way data binding is a two-way interaction, data flows in both ways (from component to views and views to component). Simple example is ngModel. If you do any changes in your property (or model) then, it reflects in your view and vice versa. It is the combination of property and event binding.  <br>

```
For example,

<input type="text" [(ngModel)]="userName" />
<p>Two way binding! Hello {{ userName }}!</p>

```
 if you enter any text in the textbox, it will bind to the property.
<br>
<h2>- Directives </h2>
Link :https://www.tutorialspoint.com/angular8/angular8_directives.htm
