var x = 'global';

function foo() {
  var x = 'local';
  console.log(x); // ① local
}

foo();

console.log(x); // ② global