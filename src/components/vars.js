// var -> function
// let -> block
// const -> block

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
}

sayHello();

function sayLetHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // Failed to compile
  //console.log(i);
}

sayLetHello();

const x = 1;
// x = 2; not able to assign it is readonly
