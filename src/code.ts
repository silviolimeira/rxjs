import { fromEvent, of, forkJoin, timer, Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/throttleTime";
import "rxjs/add/observable/interval";

var button = document.querySelector("button");
var observable = Observable.interval(1000);

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

observable
  .map(function(value) {
    return value * 2;
  })
  .throttleTime(2000) // skip values during the throttle time
  .subscribe(observer);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
