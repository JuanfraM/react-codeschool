import React from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showComments: false,
      comments: [
        { key: '1', author: 'Juanfra', description: 'Some description'},
        {key: '2',author: 'Maria',description: 'Some description 2'}
      ]
    };
  }

  render() {
    let buttonText = 'Show Comments';
    let commentNodes;
    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = this._getComments();;
    }
    return (
      <div className="comment-list">
        <CommentForm addComment={this._addComment.bind(this)}/>
        <h1> Comments: </h1>
        <button onClick={this._handleClick.bind(this)}> {buttonText}</button>
        {commentNodes}
      </div>
    )
  }

  _deleteComment(comment) {
    const comments = [...this.state.comments];
    const commentIndex = comments.indexOf(comment);
    comments.splice(commentIndex, 1);
    this.setState({comments});
  }

  _addComment(author, description) {
    const comment = {
      key: this.state.comments.length + 1,
      author,
      description
    };
    this.setState({ comments: this.state.comments.concat([comment]) })
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments,
    });
  }

  _getComments() {
    return this.state.comments.map(
              c => {
                  return (
                        <Comment author={c.author} description={c.description} key={c.key}
                                 onDelete={this._deleteComment.bind(this)}/>
                      );
              }
    )
  }
}


export default CommentBox;
