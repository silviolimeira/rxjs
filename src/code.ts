import { fromEvent, of, forkJoin, timer } from "rxjs";
import { throttleTime, map } from "rxjs/operators";
import "rxjs/add/operator/map";
import "rxjs/add/observable/fromEvent";

var button = document.querySelector("button");
// button.addEventListener("click", event => {
//   console.log(event);
// });

// accept click event one per second
fromEvent(button, "mousedown")
  .pipe(throttleTime(1000))
  .subscribe(event => console.log(event));

fromEvent(button, "click")
  .pipe(throttleTime(500))
  .map(data => {
    return data.clientX;
  })
  .subscribe(coordinate => console.log(coordinate));

// Logs:
// { foo: 4, bar: 8, baz: 0 } after 4 seconds
// "This is how it ends!" immediately after
const observable = forkJoin({
  a: of(1, 2, 3, 4),
  b: Promise.resolve(4),
  c: timer(4000)
});
observable.subscribe({
  next: value => addItem(JSON.stringify(value)),
  complete: () => console.log("This is how it ends!")
});

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
