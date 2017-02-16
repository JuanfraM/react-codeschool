import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div>
          <a href="#" onClick={this._handleDelete.bind(this)}>
            Delete comment
          </a>
          <h3> Hello {this.props.author} </h3>
          <textarea defaultValue={this.props.description}/>
      </div>
    );
  }

  _handleDelete(event) {
    event.preventDefault();
    if (confirm('Are you sure?')) {
      this.props.onDelete(this.props.comment);
    }
  }
}


export default Comment;
