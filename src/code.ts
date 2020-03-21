import { Observable } from "rxjs";

var observable = Observable.create((observer: any) => {
  try {
    observer.next("Hello everyone!");
    observer.next("How are you ?");
    setInterval(() => {
      observer.next("I am good");
    }, 2000);
  } catch (err) {
    observer.error(err);
  }
});

var observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("Completed")
);

var observer2 = observable.subscribe((x: any) => addItem("Obsrver 2: " + x));

setTimeout(() => {
  observer.unsubscribe();
}, 60001);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
