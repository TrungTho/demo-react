import { Component } from "react";
import Demo from "./demo";
import TrafficLight from "./components/trafficlight";

class App extends Component {
  //create temp data with cons
  constructor() {
    console.log("cons again");

    super();
    this.state = {
      listItem: [
        { title: "an sang", isDone: false },
        { title: "an trua", isDone: false },
        { title: "an chieu", isDone: false },
        { title: "an toi", isDone: false },
        { title: "di ngu", isDone: false },
      ],
    };

    this.doSomeThing = this.doSomeThing.bind(this);
  }

  //func to call when something is clicked
  doSomeThing(index) {
    console.log("hehe", index);

    let tempList = this.state.listItem;
    tempList[index].isDone = !tempList[index].isDone;
    this.setState({ listItem: tempList });
  }

  // render() {
  //   return (
  //     <>
  //       <TrafficLight />
  //     </>
  //   );
  // }

  render() {
    return (
      <>
        <h2>todolist</h2>
        {this.state.listItem.map((item, index) => (
          <Demo
            key={index}
            index={index}
            item={item}
            onClick={() => this.doSomeThing(index)}
          />
        ))}
      </>
    );
  }
}

export default App;
