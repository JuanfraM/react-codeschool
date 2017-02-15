require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class List extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {this.props.aux.map(item => <li> {item} </li>)}
        </ul>
      </div>
    );
  }
}

List.defaultProps = {
};

export default List;
