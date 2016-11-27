import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { App } from '../../ui/layouts/App.jsx';
import { Index } from '../../ui/components/Index.jsx';

import { One } from '../../ui/pages/One.jsx';
import { Two } from '../../ui/pages/Two.jsx';
import { NotFound } from '../../ui/pages/Not-Found.jsx';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/one" component={ One } />
        <Route path="/two" component={ Two } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>,
    document.getElementById( 'react-root' )
  );
});
