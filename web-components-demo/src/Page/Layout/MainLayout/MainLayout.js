import React, { Component } from 'react';

class MainLayout extends Component {
  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default MainLayout;
