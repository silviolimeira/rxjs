import { Observable } from "rxjs";

import { interval } from "rxjs";
import { filter } from "rxjs/operators";

var button = document.querySelector("button");

var numbers = interval(1000).pipe(
  filter(value => {
    return value % 2 == 0;
  })
);

numbers.subscribe({
  next: value => {
    console.log(value);
    addItem(value);
  },
  error: error => {
    console.log("Error: ", error);
  }
});

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
