import { Component } from "react";
import Demo from "./demo";
// import TrafficLight from "./components/trafficlight";
import selectAll from "../src/images/selectall.png";

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
    this.addNewItem = this.addNewItem.bind(this);
  }

  //func to call when something is clicked
  doSomeThing(index) {
    //avoid process func when first time render data
    //only process when an item is clicked
    return (event) => {
      console.log("index", index);
      const currentListItem = this.state.listItem;
      this.setState({
        listItem: [
          ...currentListItem.slice(0, index),
          { ...currentListItem[index], isDone: !currentListItem[index].isDone },
          ...currentListItem.slice(index + 1),
        ],
      });
    };

    // let tempList = this.state.listItem;
    // tempList[index].isDone = !tempList[index].isDone;
    // this.setState({ listItem: tempList });
  }

  // render() {
  //   return (
  //     <>
  //       <TrafficLight />
  //     </>
  //   );
  // }

  addNewItem(event) {
    if (event.keyCode === 13) {
      const newItem = event.target.value;

      this.setState({
        listItem: [{ title: newItem, isDone: false }, ...this.state.listItem],
      });
    }
  }

  render() {
    return (
      <>
        <h2>Todo List</h2>
        <div className="itemHeader">
          <img src={selectAll} className="itemIcon"></img>
          <input
            type="text"
            placeholder="something to do"
            autoFocus={true}
            onKeyUp={this.addNewItem}
          ></input>
        </div>

        <div className="itemBox">
          {this.state.listItem.map((item, index) => (
            <Demo
              key={index}
              index={index}
              item={item}
              onClick={this.doSomeThing(index)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
