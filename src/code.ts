import { fromEvent, of, forkJoin, timer } from "rxjs";
import { throttleTime, map } from "rxjs/operators";
import "rxjs/add/operator/map";
import "rxjs/add/observable/fromEvent";

var button = document.querySelector("button");

fromEvent(button, "click")
  .pipe(throttleTime(500))
  .map((data: MouseEvent) => {
    return data.clientX;
  })
  .subscribe(coordinate => {
    console.log(coordinate);
    addItem(coordinate);
  });

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
