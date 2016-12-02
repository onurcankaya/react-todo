import React, { Component } from 'react';
import moment from 'moment';

export default class Todo extends Component {
  render() {
    let {id, text, completed, createdAt, completedAt} = this.props;
    let renderDate = () => {
      let message = 'Created ~ ';
      let timeStamp = createdAt;

      if (completed) {
        message = 'Completed ~ ';
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMMM D, YYYY @ h:mm a');
    };

    return (
      <div onClick={() => {
          this.props.onToggle(id)
        }}>
        <input type="checkbox" defaultChecked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
}
