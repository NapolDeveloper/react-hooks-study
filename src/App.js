import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';

import Counter from './components/Counter/Counter';

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
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
