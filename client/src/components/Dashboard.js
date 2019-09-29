import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Messenger from './Messenger';
import ListItems from './ListItems';
import Background from '../images/dust_scratches.png'
import Background2 from '../images/footer_lodyas.png'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import API from '../utils/API';
import openSocket from 'socket.io-client';
import { logoutUser } from "../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  messengerTab: {

  },
  toolbar: {
    paddingRight: 24,
    backgroundColor: '#313131'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px',
    backgroundColor: '#f1f1f1',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflowX: 'auto',
    overflowY: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
    minHeight: '100%',
    minWidth: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  name: {
    marginRight: 'auto',
    color: '#313131'
  },
  drawer: {
    backgroundImage: `url(${Background2})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
    height: '100%',
    minWidth: '100%',
    overflow: 'hidden'
  }
}));

const Dashboard = (props) => {
  const socket = openSocket();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };
  const { user } = props.auth;
  const [unread, setUnread] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [messages, setMessages] = useState([]);

  const APISearch = () => {
    API.findUnread(user._id)
      .then(res => {
        if (res.data.length > 0) {
          findNames(res.data)
          setUnread(res.data.length)
        }
        else {
          setMessages([])
          setUnread(0)
        }
      })
      .catch(err => console.log(err))
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const findNames = (input) => {
    input.map(message => (
      API.getUser(`${message.sender}`)
        .then(res => {
          setMessages(messages =>
            [...messages,
            {
              _id: message._id,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              sent: message.created_at,
              content: message.content
            }
            ]
          );
        })
        .catch(err => console.log(err))
    ))
  }

  useEffect(() => {
    socket.on('refresh', user => {
      APISearch()
    });
    socket.on('message', data => {
      APISearch()
    });
    APISearch();
    return () => {
      socket.removeAllListeners('refresh');
      socket.removeAllListeners('message');
    }
  }, []);
  const messageList = messages.sort((a, b) => (a.sent > b.sent) ? 1 : -1)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Messenger />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            J-CARD Brewing Inc.
          </Typography>
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
            <Badge badgeContent={unread} color='error'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {messageList ?
              messages.map((message, index) => (
                <MenuItem key={index} onClick={handleClose}>New message from {message.firstName} {message.lastName}</MenuItem>
              ))
              :
              <MenuItem onClick={handleClose}>You have no new messages</MenuItem>
            }
          </Menu>
          <Button
            variant="contained"
            onClick={onLogoutClick}
            style={{ backgroundColor: '#f1f1f1' }}
          >
            Logout
                </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <ListItemAvatar>
            <Avatar alt={`${user.firstName}'s profile pic`} src={"https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"} />
          </ListItemAvatar>
          <h2 className={classes.name}>{user.firstName} {user.lastName}</h2>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List className={classes.drawer}>
          <ListItems />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {props.children}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);