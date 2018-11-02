import React, { Component } from 'react';
import { Provider} from 'react-redux';
import store from'../Reducers/index';
import '../Styles/App.css';

import FriendsAction from '../Actions/FriendsAction';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
        <h1>React-Redux-App</h1>
        </header>
        <Provider store = {store}>
        <FriendsAction/>
        </Provider>
        </div>
    );
  }
}

export default App;
