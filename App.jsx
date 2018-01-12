import React from "react";
import AddNewTask from "./AddNewTask.jsx";
import AppList from "./AppList.jsx";


class App extends React.Component {
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
    }
    updateList(text)    {
        var updatedTasks = this.state.tasks;
        updatedTasks.push(text);
        this.setState({tasks: updatedTasks});
    }
    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <AddNewTask updateList={this.updateList}/>
                <AppList tasks={this.state.tasks} />
            </div>
        );
    }
}
export default App;