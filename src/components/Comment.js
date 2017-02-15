import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div>
          <h3> Hello {this.props.author} </h3>
          <textarea defaultValue={this.props.description}/>
      </div>
    );
  }
}


export default Comment;
