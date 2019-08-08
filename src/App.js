import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Lists />
        <Note />
      </div>
    );
  }
}


export default App;
