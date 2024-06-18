/*

here we are going to see Javascript is a

4.dynamic language:

Because let see example

let x =80;
let y= 67;
let x="start";

we dont assign a data type to a variable javascript only knows variable during runtime
that why we call javascript as dynamic runtime environment
(strongly typed languages)
5.Single threaded Non blocking event loop:
concurrency model- How javascript engine handles multiple tasks concurrently occurs at same time
?why do we need that?
javascript runs at one single thread so it can do one task at a time
What about long running task?
sounds like it blocks single thread. so we want non blocking behaviour
how do we achieve that?

By using event loop; takes long running task and run them in background and put them back
in  main theard once they executed

Let see how javascript engine works

Every browser has its own javascript engine like google has v8 engine which is more popular

javascript engine has two parts

call stack- this part is where our code is executed in execution context
heap- this is like a unstrutured memory where object in memory and objects are stored

the question is how javacript code conveted into machine code

here is two concepts compilation and interpretation

computer processors only executes 010101001110101110101
so we need to convert javascript code to machine understanable language

compilation is a process where javascript code is converted into machine code. This is machine code is transferred in a 
portable file that we can be executed in a any computers
Kindly refer to the screenshot in the macbook

three blocks in execution context which is happening in call stack

1. Variable environment
2. scope chain
3. this keyword

Hoisting - It is like make some type of variable accessible and usable in the code before they are
actually declared. "variable lifted to top of their scope"

before execution code is scanned for variable declarations 

*/

callName("Yuvaraj"); //here we declared function first and than we call funtion
//also function declarations are block scoped

function callName(name) {
  console.log(`Hello ${name}`);
}

console.log(me);
console.log(job);

console.log(birthYear);

var me = "yuvaraj";
const job = "System Engineer";
let birthYear = 1999;
