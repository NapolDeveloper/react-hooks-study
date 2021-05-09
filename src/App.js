import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';

import Counter from './components/Counter/Counter';
import CounterReducer from './components/Counter/CounterReducer';
import Users from './components/Users/Users';
import Profile from './components/Users/Profile';

import GlobalStyle from './global';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path='/counter'>
            <Counter />
          </Route>
          <Route path='/counter-reducer'>
            <CounterReducer />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
