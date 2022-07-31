import Header from  '../components/header.js'
import PersistentDrawerLeft from '../components/drawer.js'
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';

function Main() {

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [main_content,setMainContent]=React.useState(" ")
  return (
    <div className="App-a">
      <section className="App-header">
        <Header handleDrawerOpen={handleDrawerOpen} open={open} />
        <PersistentDrawerLeft open={open} handleDrawerClose={handleDrawerClose}  />
     
      </section>
    </div>
  );
}

export default Main;
