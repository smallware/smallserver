
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

const Heading = () => (
  <div className="heading">
    <AppBar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',

      }}
      titleStyle={{
        color: '#666',
        fontSize: '20px'
      }}
      iconStyleLeft={{
        color: '#666',
        height: '20px'
      }}
    />
  </div>
);

const Main = () => (
  <div className="main container">
    <Heading />
    <div className="body" style={{height: '1000px'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </div>
  </div>
);

export default Main;