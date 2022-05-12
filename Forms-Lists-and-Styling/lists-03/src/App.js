import React from "react";

export class TodoList extends React.Component {
  SubmitEventHandler = (event) => {
    event.preventDefault();

    const array = this.props.items;
    const newItem = event.target.elements.todoElement.value;

    array.push(newItem);

    event.target.elements.todoElement.value = "";
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <form onSubmit={this.SubmitEventHandler}>
          <input name="todoElement" />
          <button>Add To List</button>
        </form>
      </div>
    );
  }
}
