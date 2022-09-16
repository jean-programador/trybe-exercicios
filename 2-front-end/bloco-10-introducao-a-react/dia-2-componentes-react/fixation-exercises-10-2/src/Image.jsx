// arquivo Order.js
import React from 'react';

class Image extends React.Component {
  render() {
    const { avatar, name } = this.props.user;

    return (
        <img src={ avatar } alt={ name } />
    );
  }
}

export default Image;