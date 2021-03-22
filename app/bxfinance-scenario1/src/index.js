import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home';
import AccountsDashboard from './pages/accounts-dashboard';
import AccountsPayTransfer from './pages/pay-transfer/index';
import AccountsTransfer from './pages/pay-transfer/accounts-transfer';
import AccountsProfileSettings from './pages/profile-settings/index';
import CommunicationPrefernces from './pages/profile-settings/communications-preferences';
import PrivacySecurity from './pages/profile-settings/privacy-security';
import AnyWealthAdvisor from './pages/any-wealth-advisor';
import Advisor from './pages/advisor/index';
import AdvisorClient from './pages/advisor/client';
import AnyMarketing from './pages/any-marketing';
import * as serviceWorker from './serviceWorker';
import FedExProfile from './pages/FedExProfile/ProfilePage'

const routing = (
  <Router basename={`${process.env.PUBLIC_URL}`}>
    <Switch>
      <Route path="/profile">
        <FedExProfile />
      </Route>
      <Route path="/communication-preferences">
        <CommunicationPrefernces />
      </Route>
      {/* <Route path="/banking/profile-settings">
        <AccountsProfileSettings />
      </Route>
      <Route path="/banking/pay-and-transfer">
        <AccountsPayTransfer />
      </Route>
      <Route path="/banking/transfer-money">
        <AccountsTransfer />
      </Route>
      <Route path="/banking">
        <AccountsDashboard />
      </Route>
      <Route path="/any-wealth-advisor">
        <AnyWealthAdvisor />
      </Route>
      <Route path="/advisor/client">
        <AdvisorClient />
      </Route>
      <Route path="/advisor">
        <Advisor />
      </Route> */}
      <Route path="/any-marketing">
        <AnyMarketing />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
