import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import { Context } from './store/Context';
class App extends React.Component {
  render() {
    return (
      <Context.Provider value={["blue", "red", "yellow"]}>
        <ColorBox />;
      </Context.Provider>
    );
  }
}
export default App;
