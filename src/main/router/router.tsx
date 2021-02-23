import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { TodoList } from 'presentation/pages';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={TodoList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
