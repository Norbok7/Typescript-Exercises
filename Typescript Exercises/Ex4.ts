//Write a function greet that takes in a name (string) and returns a greeting (string). 
interface Human {
  //here we can define structure or type
  firstName: string;
  greet:  () => void;
}
let maxx: Human;
maxx = {
  firstName: 'Max',
  greet() {
    console.log('hello');
  }
}
