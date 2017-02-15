require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import List from './List';
import CommentBox from './CommentBox'

let yeomanImage = require('../images/yeoman.png');
let auxList = [
  "Hola",
  "Como",
  "va?"
];

class Quiz extends React.Component {
  render() {
    return (
      <div>
        <div className="notice">
        	<h1> Hello {this.props.name} </h1>
        </div>
        <List title="First List" aux={auxList}/>
        <CommentBox/>
      </div>
    );
  }
}

Quiz.defaultProps = {
  
};

export default Quiz;
