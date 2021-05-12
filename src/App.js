import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import Counter from './components/Counter/Counter';
import CounterReducer from './components/Counter/CounterReducer';
import UserStore, { UserContext } from './components/Users/Users';
import Profile, { ProfileHeader, ProfileBody } from './components/Users/Profile';

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
          <UserStore>
            <Route path='/profile'>
              <Profile>
                <ProfileHeader />
                <ProfileBody />
              </Profile>
            </Route>
          </UserStore>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
