import { Person } from "./person";

// default export Teacher -> default keyword
// named export Person -> {Person}

export function Promote() {
  console.log("Promote called");
}

export default class Teacher2 extends Person {
  constructor() {
    super();
  }

  teach() {
    console.log("teach");
  }
}
