import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';


const NavigationBar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <h1> Time Tools </h1>
          </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavigationBar;
