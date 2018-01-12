import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var taskList = [];
var taskStorage = localStorage.getItem('storedTasksKey');  // adding a local storage to store the data locally
if (taskStorage) {
  taskList = JSON.parse(taskStorage);  // if data is present we can parse it
}

ReactDOM.render(<App tasks={taskList} />, document.getElementById('app'));