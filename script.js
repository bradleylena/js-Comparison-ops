let score = 85;
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "C"
    : "end";
console.log(grade);

let age = 19;
let canvote = age >= 18 ? "Yes" : "No";
console.log(canvote);

console.log(10 > 5 ? "Greater" : "Smaller");

let a = 4;
let b = 9;
let c = a > b;
console.log(c);

let firstname = "Brad";
let secondname = "Lenaiyarra";
let fullname = firstname + "" + secondname;
console.log(fullname);

const brad = "brad";
const lena = 19;
const finish = brad + lena;
console.log(finish);

//arithmetics
let exponentiation = 500 ** 2;
console.log(exponentiation);

let increment = 40;
let second = ++increment;
console.log(second);

let modulus = 50;
let operand = 30;
let result = modulus % operand;
console.log(result);

{
  let score = 35;
  let grade = score >= 10 ? "C" : score >= 20 ? "B" : score >= 30 ? "C" : "end";
  console.log(grade);
}

{
  let x = 15;
  x += 3; //add 3
  console.log(x);
}
{
  let y = 200;
  y %= 6;
  console.log(y);
}
{
  let x = 10;
  x **= 20;
  console.log(x);
}
{
  let username = null;
  username ||= "Guest";
  console.log(username);
}
{
  let x = "";
  x ||= "Sign in";
  console.log(x);
}
{
  let x = undefined;
  x ??= 10;
  console.log(x);
}

let x = myfunction(4, 3, 2);

function myfunction(a, b, c) {
  return a * b * c;
}
console.log(x);

{
  function greet() {
    console.log("Hello");
  }
  greet();
}
{
  const name = brad;
  const age = 18;
  function mzee() {
    console.log(name, age);
  }
  mzee("brad");
}
{
  function greet(name) {
    console.log("Hi " + name);
  }
  greet("lenaiyarra");
}
{
  const bmw = {
    model: "M340i",
    color: "Red",
    Origin: "Germany",
  };
  console.log(bmw.model, bmw.color, bmw.Origin);
}

const fn = {
  fnme: "gello",
  snme: function () {
    console.log("nameis" + this.fnme);
  },
};
fn.snme();
