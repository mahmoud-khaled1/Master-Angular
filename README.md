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
export class TestComponent { 
   userName:string = "Peter"; 
}
<br>
Add the below changes in view test.component.html,
<br>
<input type="text" [value]="userName">
<br>
