import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayoutRouter from './MainLayoutRouter';
import NotFound from '../Page/404/index';
import config from '../../config';

const RouterConfig = () => {
  return (
    <BrowserRouter basename={config.basePath}>
      <Switch>
        <Route path="/404" component={NotFound} exact />
        <Route path="/" component={MainLayoutRouter} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouterConfig;
