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
import DeveloperBoard   from 'material-ui/svg-icons/hardware/developer-board';
import Assessment       from 'material-ui/svg-icons/action/assessment.js';
import Subscriptions    from 'material-ui/svg-icons/av/subscriptions.js';
import Extension        from 'material-ui/svg-icons/action/extension.js';
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
      <ListItem
        primaryText="Resources"
        leftIcon={<Subscriptions />}
        initiallyOpen={true}
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Groups"
            leftIcon={<ActionGrade />}
          />,
          <ListItem
            key={2}
            primaryText="Sent Mail"
            leftIcon={<DeveloperBoard />}
            disabled={true}
            nestedItems={[
              <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
            ]}
          />,
        ]}
      />
      <ListItem
        primaryText="Services"
        leftIcon={<Extension />}
        initiallyOpen={true}
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Groups"
            leftIcon={<ActionGrade />}
          />,
          <ListItem
            key={2}
            primaryText="Sent Mail"
            leftIcon={<DeveloperBoard />}
            disabled={true}
            nestedItems={[
              <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
            ]}
          />,
        ]}
      />
      <ListItem
        primaryText="Users"
        leftIcon={<People />}
        initiallyOpen={true}
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem
            key={1}
            primaryText="Groups"
            leftIcon={<ActionGrade />}
          />,
          <ListItem
            key={2}
            primaryText="Sent Mail"
            leftIcon={<DeveloperBoard />}
            disabled={true}
            nestedItems={[
              <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
            ]}
          />,
        ]}
      />
    </List>
  </div>
);

export default Sidebar;