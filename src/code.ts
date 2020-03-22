import {
  fromEvent,
  of,
  forkJoin,
  timer,
  Observable,
  Subject,
  Subscriber
} from "rxjs";

var button = document.querySelector("button");

var subject = new Subject();

subject.subscribe({
  next: value => {
    console.log(value);
  },
  error: error => {
    console.log(error);
  },
  complete: () => {
    console.log("Completed");
  }
});

subject.subscribe({
  next: value => {
    console.log("Other: " + value);
  }
});

subject.next("A new data piece.");
//subject.error("Error");
subject.complete();
subject.next("A new value.");

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
