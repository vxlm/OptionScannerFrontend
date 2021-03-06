import React from 'react';
import clsx from 'clsx';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { useHistory } from "react-router-dom";


import {
  useParams
} from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
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
    width: `calc(100%px)`,//width: `calc(100% - ${drawerWidth}px)`,
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
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
}));
const Dashboard=() =>{
  let history = useHistory();

  let { id } = useParams()
  const [specificOption, setSpecificOption] = useState({})
  const [similarOptions, setSimilarOptions] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  const [isSummaryLoading,setIsSummaryLoading] = useState(false)
  const [summary,setSummary] = useState({})
  const optionURI = `https://option-scanner-backend.herokuapp.com/options/${id}`
  const similarOptionUri= `https://option-scanner-backend.herokuapp.com/similaroptions/${id}`
  const summaryUri = `https://option-scanner-backend.herokuapp.com/summary/${id}`
  useEffect(() => {
    getData()
    getSimilarData()
    getSummaryData()
  }, [])
  
  async function getData () {
    await axios(optionURI)
      .then(response => {
        setSpecificOption(response.data)
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
      })
      .finally(() => {})
  }
  async function getSimilarData () {
    await axios(similarOptionUri)
      .then(response => {
        setSimilarOptions(response.data)
        setIsLoading(true)
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
      })
      .finally(() => {})
  }
  async function getSummaryData () {
    await axios(summaryUri)
      .then(response => {
        setSummary(response.data)
        setIsSummaryLoading(true)
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
      })
      .finally(() => {})
  }
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(false);
  };
  const handleDrawerClose = () => {
    setOpen(true);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
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
            {id}
          </Typography>
         <IconButton color="inherit" onClick={history.goBack}>Home</IconButton>
        
          <IconButton color="inherit">
          {new Date().toLocaleString() + ''}
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={7}>
              <Paper className={fixedHeightPaper}>
              {specificOption.keys ? <Chart data={specificOption} /> : <h1>Loading</h1>}
                
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={5}>
              <Paper className={fixedHeightPaper}>
              {isSummaryLoading ? <Deposits data={summary} /> : <h1>Loading</h1>}

              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              {isLoading ?  <Orders rows={similarOptions}/> : <h1>No Data</h1>}
              
        
              </Paper>
            </Grid>
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
              {isLoading ?  <Orders rows={similarOptions}/> : <h1>No Data</h1>}
              
        
              </Paper>
            </Grid> */}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
export default Dashboard