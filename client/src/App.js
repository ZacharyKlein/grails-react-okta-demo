import * as React from 'react';
import './css/App.css';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-699989.oktapreview.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oad6dof6gwJkiXHs0h7'
};

class App extends React.Component {

  render() {
    return (
      <Router>
        <Security
          issuer={config.issuer}
          client_id={config.clientId}
          redirect_uri={config.redirectUri}
        >
          <Route path="/" exact={true} component={Home}/>
          <Route path="/implicit/callback" component={ImplicitCallback}/>
        </Security>
      </Router>
    );
  }
}

export default App;