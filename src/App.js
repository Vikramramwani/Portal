import React from 'react';
import './styles/App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Home from './components/Home'
import Connect from './components/Connect'
import Mock from './components/Mock'
import Discuss from './components/Discuss'
import Profile from './components/Profile'
import SignIn from './components/SignIn'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main : 'rgb(0, 100, 100)',
    }
  },
});

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentModule : 'discuss'
    }
  }

  _onChangeModule = moduleName => this.setState({currentModule : moduleName})

  render() {
    let mainContent = <Home/>
    if(this.state.currentModule === 'discuss') {
      mainContent = <Discuss/>
    }
    if(this.state.currentModule === 'connect') {
      mainContent = <Connect/>
    }
    if(this.state.currentModule === 'mock') {
      mainContent = <Mock/>
    }
    if(this.state.currentModule === 'profile') {
      mainContent = <Profile/>
    }
    if(this.state.currentModule === 'signin') {
      mainContent = <SignIn/>
    }

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header current={this.state.currentModule} onChange={this._onChangeModule} />
          {mainContent}
          <Footer/>
        </div>
      </ThemeProvider>
    )
  }
}

export default App;
