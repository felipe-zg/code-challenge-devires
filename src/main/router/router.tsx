import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { makeTodoList } from 'main/factories/pages/todo-list/todo-list-factory';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={makeTodoList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
