import React, { createContext, Component } from 'react';
import localStorageData from '../utils/localStorage';

const themeConfig = {
  light: {
    backgroundColor: '#fff',
    contentColor: '#333333',
  },
  dark: {
    backgroundColor: '#333333',
    contentColor: '#fff',
  },
};

const Context = createContext();

export default class ThemeContext extends Component {
  static Consumer = Context.Consumer;
  state = {
    theme: 'light',
  };

  componentDidMount() {
    this.loadTheme();
  }

  componentDidUpdate() {
    this.saveTheme();
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === 'dark' ? 'light' : 'dark',
    });
  };

  saveTheme = () => {
    localStorageData.saveData('theme', this.state.theme);
  };

  loadTheme = () => {
    const persistedTheme = localStorageData.loadData('theme');
    if (persistedTheme) {
      this.setState({ theme: persistedTheme });
    }
  };

  render() {
    return (
      <Context.Provider
        value={{
          checked: this.state.theme,
          config: themeConfig[this.state.theme],
          onToggle: this.toggleTheme,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
