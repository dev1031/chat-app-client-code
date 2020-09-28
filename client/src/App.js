import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path={'/'} component ={Join} />
      <Route exact path={'/chat'} component ={Chat} />
    </Switch>
    </Router>
  );
}

export default App;

// Real chat application hosted on -->https://5f7164570727d037de68263f--unruffled-bell-7e7c9b.netlify.app