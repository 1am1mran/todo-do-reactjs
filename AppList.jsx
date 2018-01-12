import React from "react";

//this is the to do list section or our Output section
class AppList extends React.Component {
  constructor() {
    super();
    this.remove = this.remove.bind(this);
  }

  remove(output) {  // remove function for removing a todo item
    var value = output.target.parentNode.querySelector('span').innerText;  // our tatgetted element here is span which is at items below
    this.props.remove(value); 
  }

  render() {
    var items = this.props.tasks.map((output, i) => {
      return <li className="list-group-item" key={i}>
        <span>{output}</span>
        <button onClick={this.remove} className="glyphicon glyphicon-remove"></button>
        {/* onclicking this button we deletes a list item form our output list */}
      </li>
    });

    return (
      <div>
        <h3>Todo List</h3>
        <ul className="list-group">
          {items}
        </ul>
      </div>
    );
  }
}
export default AppList;