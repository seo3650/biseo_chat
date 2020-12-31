import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import LoginRedirect from './pages/LoginRedirect';
import LoginCallback from './pages/LoginCallback';

function App() {
  return (
    <Router>
      <Route path="/" exact component={ Join }/>
      <Route path="/chat" component={ Chat }/>
      <Route path="/login/redirect" component={ LoginRedirect }/>
      <Route path="/login/callback" component={ LoginCallback }/>
    </Router>
  );
}

export default App;
