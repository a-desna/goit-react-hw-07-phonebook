import React, { Component } from 'react';
import ThemeContext from '../context/ThemeContext';

const withTheme = WrappedComponent => {
  return class withTheme extends Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {ctx => <WrappedComponent {...this.props} theme={ctx} />}
        </ThemeContext.Consumer>
      );
    }
  };
};

export default withTheme;
