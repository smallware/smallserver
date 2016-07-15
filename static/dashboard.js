
import React                from 'react';
import ReactDOM             from 'react-dom';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './dashboard.scss';
import Sidebar from './lib/layout/sidebar';
import Main from './lib/layout/main';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



const Dashboard = () => (
  <MuiThemeProvider>
    <div className="dashboard">
      <Sidebar />
      <Main />
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Dashboard />,
  document.getElementById('dashboard')
);

console.log('>>> hello index frontend static');