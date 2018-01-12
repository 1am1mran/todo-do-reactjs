import React from "react";
import AddNewTask from "./AddNewTask.jsx";
import AppList from "./AppList.jsx";


// This is the main to all the other componenets

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { tasks: props.tasks };
    this.updateList = this.updateList.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  updateList(text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({ tasks: updatedTasks });
    this.updateLocalStorage(updatedTasks);
  }

  removeTask(text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({ tasks: updatedTasks });
    this.updateLocalStorage(updatedTasks);
  }

  updateLocalStorage(updatedTasks) {
    localStorage.setItem('storedTasksKey', JSON.stringify(updatedTasks))
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <AddNewTask updateList={this.updateList} />
        <AppList tasks={this.state.tasks} remove={this.removeTask} />
      </div>
    );
  }
}
export default App;