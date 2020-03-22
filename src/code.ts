// import { fromEvent, of, forkJoin, timer } from "rxjs";
// import { throttleTime, map } from "rxjs/operators";
// import "rxjs/add/operator/map";
// import "rxjs/add/observable/fromEvent";

// var button = document.querySelector("button");

// fromEvent(button, "click")
//   .pipe(throttleTime(500))
//   .map((data: MouseEvent) => {
//     return data.clientX;
//   })
//   .subscribe(coordinate => {
//     console.log(coordinate);
//     addItem(coordinate);
//   });

// function addItem(val: any) {
//   var node = document.createElement("li");
//   var textnode = document.createTextNode(val);
//   node.appendChild(textnode);
//   document.getElementById("output").appendChild(node);
// }

import { fromEvent, of, forkJoin, timer, Observable } from "rxjs";
import "rxjs/add/operator/map";

var button = document.querySelector("button");

var observer = {
  next: function(value: any) {
    console.log(value);
    addItem(value);
  },
  error: function(error: any) {
    console.log(error);
    addItem(error);
  },
  complete: function() {
    console.log("Completed");
    addItem("Completed");
  }
};

// fromEvent(button, "click").subscribe(observer);

var subscription = Observable.create(function(obs: any) {
  // example 1
  // obs.next("A value* " + Date.now().toString());
  // obs.next("A scond value.");
  // //obs.error("Error");
  // setTimeout(function() {
  //   obs.complete();
  // }, 2000);
  // obs.next("A third value.");

  // example 2
  button.onclick = function(event) {
    obs.next(event);
  };
}).subscribe(observer);

setTimeout(function() {
  subscription.unsubscribe();
}, 3000);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
