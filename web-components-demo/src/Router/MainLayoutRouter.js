import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from '../Page/Layout/MainLayout/MainLayout';
import HomePage from '../Page/HomePage';
import CryptoJsView from '../Page/Crypto';

class MainLayoutRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/crypto" component={CryptoJsView} exact />
          <Redirect to={{ pathname: '/404' }} />
        </Switch>
      </MainLayout>
    );
  }
}

export default MainLayoutRouter;
