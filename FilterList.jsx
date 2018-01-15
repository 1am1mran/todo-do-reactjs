import React from "react";
import AppList from "./AppList.jsx";

class FilterList extends React.Component {

  constructor(props) {
    super();
    this.state = { tasks: props.tasks };  //initial state
    this.remove = this.remove.bind(this);
    this.ok = this.ok.bind(this);
    this.completedList = this.completedList.bind(this);
    this.incompleteList = this.incompleteList.bind(this);
  }

  remove(output) {  // remove function for removing a todo item
    let value = output.target.parentNode.querySelector('span').innerText;  // our tatgetted element here is span which is at items below
    this.props.remove(value);
  }

  ok(output) {  // ok function for after task is completed in todo list
    let value = output.target.parentNode.querySelector('span');  // our tatgetted element here is span which is at items below
    // dubugger(); 
    let done = value.style.color = "red";
    this.updateStorage(done);
  }

  incompleteList(text) {
    let incompleteTask = this.state.tasks;
    let incompleteTasks = incompleteTask.filter(task => task.remove);
    console.log(incompleteTasks);
    this.setState({ tasks: incompleteTasks });  //updated state
    this.updateStorage(incompleteTasks);
  }

  completedList(text) {
    let completedTask = this.state.tasks;
    let completedTasks = completedTask.filter(task => task.ok);
    console.log(completedTasks);
    this.setState({ tasks: completedTask });  //updated state
    this.updateStorage(completedTask);
  }

  updateStorage(updatedTasks) {  // storing the element value locally 
    localStorage.setItem('storedTasksKey', JSON.stringify(updatedTasks))
  }

  render() {
    var items = this.props.tasks.map((output, i) => {
      return (
        <div key={i}>
          <li className="list-group-item">
            <span>{output}</span>
            {/* <label onClick={this.ok} class="checkbox-inline"><input type="checkbox"/></label> */}
            <button onClick={this.ok} className="btn btn-xs btn-success img-circle">&#x2713;</button>
            <button onClick={this.remove} className="btn btn-xs btn-danger img-circle">&#xff38;</button>
          </li>
        </div>
      );
    });

    return (
      <div>
        <h3>Todo List</h3>
        <ul className="list-group">
          {items}
        </ul>
        <button className="btn btn-primary" onClick={this.completedList} >Completed List</button>
        <button className="btn btn-primary" onClick={this.incompleteList} >Incompleted List</button>
      </div>
    );
  }
}
export default FilterList;