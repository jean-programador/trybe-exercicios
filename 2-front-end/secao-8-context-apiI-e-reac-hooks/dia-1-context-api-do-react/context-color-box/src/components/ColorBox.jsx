import React from 'react';
import { Context } from '../store/Context';
import '../styles/box.css';

class ColorBox extends React.Component {
  changeColor = ({ target }) => {
    const colors = this.context;
    const index = Math.floor(Math.random() * 3);
    target.style.backgroundColor = colors[index];
  }

  render() {
    return (
      <button type='button' className='box' style={{ backgroundColor: 'blue' }} onClick={ this.changeColor }>
        Click me to change my color!
      </button>
    );
  }
}

ColorBox.contextType = Context;
export default ColorBox;
