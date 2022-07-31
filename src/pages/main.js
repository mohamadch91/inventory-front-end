import Header from  '../components/header.js'
import PersistentDrawerLeft from '../components/drawer.js'
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';

function Main() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className="App-a">
      <section className="App-header">
        <Header handleDrawerOpen={handleDrawerOpen} open={open} />
        <PersistentDrawerLeft open={open} handleDrawerClose={handleDrawerClose} />
      </section>
    </div>
  );
}

export default Main;
