//
//import React    from 'react';
//import ReactDOM from 'react-dom';
//
//const Sidebar = () => (
//  <div id="sidebar">SIDEBAR</div>
//);
//
//export default Sidebar;

import React            from 'react';
import FlatButton       from 'material-ui/FlatButton';
import AppBar           from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import ActionGrade      from 'material-ui/svg-icons/action/grade';
import ContentInbox     from 'material-ui/svg-icons/content/inbox';
import ContentDrafts    from 'material-ui/svg-icons/content/drafts';
import Storage          from 'material-ui/svg-icons/device/storage.js';
import DeviceHub        from 'material-ui/svg-icons/hardware/device-hub.js';
import VerifiedUser     from 'material-ui/svg-icons/action/verified-user';
import Assessment       from 'material-ui/svg-icons/action/assessment.js';
import Subscriptions    from 'material-ui/svg-icons/av/subscriptions.js';
import ArtTrack         from 'material-ui/svg-icons/av/art-track.js';
import Extension        from 'material-ui/svg-icons/action/extension.js';
import Archive          from 'material-ui/svg-icons/content/archive.js';
import People           from 'material-ui/svg-icons/social/people';
import Subheader        from 'material-ui/Subheader';

const Heading = () => (
  <div className="heading">
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'rgba(0, 0, 0, 0.87)'
      }}
    />
  </div>
);

const Sidebar = () => (
  <div className="sidebar container">
    <Heading />
    <List className="body"
      style={{background: '#fff'}}>
      <ListItem primaryText="Dashboard" leftIcon={<Assessment />} />
      <ListItem primaryText="Resources" leftIcon={<Subscriptions />} />
      <ListItem primaryText="Services" leftIcon={<Extension />} />
      <ListItem
        primaryText="Security"
        leftIcon={<VerifiedUser />}
        initiallyOpen={false}
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Users"
            leftIcon={<ActionGrade />}
          />,
          <ListItem
            key={2}
            primaryText="Groups"
            leftIcon={<People />}
          />,
        ]}
      />
      <ListItem primaryText="Network" leftIcon={<DeviceHub />} />
      <ListItem primaryText="Database" leftIcon={<Storage />} />
    </List>
  </div>
);

export default Sidebar;