import initialRender from "./initialRender.js";
import listener from "./listeners.js";
import observer from "./observer.js";

class Todo {
  init() {
    // console.log("TODO start");
    observer(); 
    initialRender();
     listener();
 }
}

export default Todo;
