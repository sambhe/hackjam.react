import React from 'react';
import BookList from './main';
import App from './app';
import NoMatch from './noMatch';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const Routes = () => {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ BookList } />
        <Route path="books" component={ BookList }/>
        <Route path="/books/:bookId" component={ BookList }/>
        <Route path="*" component={ NoMatch }/>
      </Route>
    </Router>
  );
};

export default Routes;


