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

  updateList(text) {  //for adding the values to input element
    var updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({ tasks: updatedTasks });
    this.updateLocalStorage(updatedTasks);
  }

  removeTask(text) {  //for removing the values from input element
    var updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({ tasks: updatedTasks });
    this.updateLocalStorage(updatedTasks);
  }

  updateLocalStorage(updatedTasks) {  // storing the element value locally 
    localStorage.setItem('storedTasksKey', JSON.stringify(updatedTasks))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-8 col-offset-2 col-sm-8 col-offset-2 col-xlg-6 col-offset-3">
            <h1>Todo App</h1>
            <AddNewTask updateList={this.updateList} />
            <AppList tasks={this.state.tasks} remove={this.removeTask} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;