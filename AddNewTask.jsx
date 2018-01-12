import React from "react";


//this is our Task adding section or our input section
class AddNewTask extends React.Component {

  constructor() {
    super();
    this.justSubmitted = this.justSubmitted.bind(this);  // this binds or responds with the data we just entered into our input
  }

  justSubmitted(event) {
    event.preventDefault(); // to avoid auto reload we are using prevent default
    var input = event.target.querySelector("input");  // we are targetting our input element here
    var value = input.value; // now we are inserting our input value
    input.value = ''; //Initially we are giving an empty data to avoid conflicts
    this.props.updateList(value);  // So we are finally updating our every new value in our input element
  }

  render() {
    return (
      <div>
        <h3>Add New Task</h3>
        <form onSubmit={this.justSubmitted} >
          <input type="text" placeholder="Enter Your order" />
        </form>
      </div>
    );
  }
}
export default AddNewTask;