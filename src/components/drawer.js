import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import './css/drawer.css';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const box_style={
    display:"flex",
    
}
const icon_style={
    color:"#1363DF",
    // backgroundColor:"#1363DF"
}
const ac_icon_style={
    color:"#1363DF",
    paddingLeft:"0.7vw"
}
const drawer_items = [
 
    {
        name:"Facilities",
        icon:<DomainAddIcon sx={icon_style}/>,
            link:"/facilities",
            items:["New Facility","Facility List","Print Facility List"]
    },
    {
        name: "Items",
        icon:<AccountTreeIcon sx={icon_style}/>,
            link:"/items",
            items:["New Item","Item List","Print Item List"]

    },
    {
        name:"Reports",
        icon:<SummarizeIcon sx={icon_style}/>,
            link:"/reports",
            items:["Gap item Report","item Report"]
    },
    {
        name:"Users",
        icon:<PersonIcon sx={icon_style}/>,
            link:"/users",
            items:["New User","User List","Print User List"]
    },
    {
        name:"Settings",
        icon:<SettingsIcon sx={icon_style}/>,
            link:"/settings",
            items:["Settings","About"]
    },

]

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    backgroundColor:"#06283D",
    color:"#1363DF",
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
export default function PersistentDrawerLeft(props) {
    const theme = useTheme();

  return (
    <Box sx={box_style}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#06283D",
            color:"#1363DF"
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.open}
      >
        <DrawerHeader>
          <IconButton  sx={icon_style} onClick={props.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
      
        </DrawerHeader>
       
        <span id="drawer_head">
            Central Store </span>
        
        <List>
        <ListItem key="Main page" disablePadding>
              <ListItemButton>
                <ListItemIcon sx={ac_icon_style}>
               <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Main page" />
              </ListItemButton>
            </ListItem>
        {drawer_items.map((item,index)=>{
            return(
                <Accordion>
                <AccordionSummary
                //   expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                     <ListItemIcon sx={icon_style}>
                                {item.icon}
                                </ListItemIcon>
                  <Typography>
                 
                    {item.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.items.map((text,index)=>{
                        return(
                           
                            <ListItem key={text} disablePadding>
                                 <ListItemButton>
                                 <ListItemIcon sx={icon_style}>
                                {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                            
                        )
                    }
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
            
        })}

        
        </List>
       
   
      </Drawer>
      <Main open={props.open}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
}