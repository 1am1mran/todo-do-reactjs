import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

var taskList = ["Task 1", "Task 2"];

ReactDOM.render(<App tasks={taskList}/>, document.getElementById('app'));