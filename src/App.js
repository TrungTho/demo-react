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
      showAll: true,
      showOnlyActive: false,
      showOnlyCompleted: false,
      userInput: "",
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
    this.userInputChange = this.userInputChange.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showOnlyActive = this.showOnlyActive.bind(this);
    this.showOnlyCompleted = this.showOnlyCompleted.bind(this);
  }

  //func to call when something is clicked
  doSomeThing(index) {
    //avoid process func when first time render data
    //only process when an item is clicked
    return (event) => {
      // console.log("index", index);
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
      const newItem = event.target.value.trim();
      if (newItem !== "") {
        this.setState({
          userInput: "",
          listItem: [{ title: newItem, isDone: false }, ...this.state.listItem],
        });
      } else {
        return;
      }
    }
  }

  selectAll() {
    let newListItem = [];
    for (let item of this.state.listItem) {
      newListItem = [...newListItem, { title: item.title, isDone: true }];
    }
    // console.log(newListItem);

    this.setState({
      listItem: newListItem,
    });
  }

  showAll() {
    this.setState({
      showAll: true,
      showOnlyActive: false,
      showOnlyCompleted: false,
    });
  }

  showOnlyActive() {
    this.setState({
      showAll: false,
      showOnlyActive: true,
      showOnlyCompleted: false,
    });
  }

  showOnlyCompleted() {
    this.setState({
      showAll: false,
      showOnlyActive: false,
      showOnlyCompleted: true,
    });
  }

  userInputChange(event) {
    const userInputString = event.target.value;
    this.setState({ userInput: userInputString });
  }

  render() {
    return (
      <>
        <h2>Todo List</h2>
        <div className="itemHeader">
          <img
            src={selectAll}
            className="itemIcon"
            onClick={this.selectAll}
          ></img>
          <input
            type="text"
            placeholder="something to do"
            autoFocus={true}
            value={this.state.userInput}
            onKeyUp={this.addNewItem}
            onChange={this.userInputChange}
          ></input>
        </div>

        <div className="itemBox">
          {this.state.listItem.map((item, index) => (
            <Demo
              key={index}
              index={index}
              item={item}
              onClick={this.doSomeThing(index)}
              showAll={this.state.showAll}
              showOnlyActive={this.state.showOnlyActive}
              showOnlyCompleted={this.state.showOnlyCompleted}
            />
          ))}
        </div>

        <div className="footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.showAll}
          >
            All
          </button>{" "}
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.showOnlyCompleted}
          >
            Completed
          </button>{" "}
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.showOnlyActive}
          >
            Active
          </button>{" "}
        </div>
      </>
    );
  }
}

export default App;
