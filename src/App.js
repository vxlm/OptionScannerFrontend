// import logo from './logo.svg'
// import './App.css'
import Option from './components/Option.js'
import Dashboard from './components/Dashboard.js'
import { useEffect, useState } from 'react'
import Options from './components/Options.js'
import axios from 'axios'
import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import { CircularProgress } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";

function App () {
  //Dark theme const
  
  // const theme = createMuiTheme({
  //   palette: {
  //     type: 'dark'
  //   }
  // })
  const theme = createMuiTheme({
    palette: {
      primary: indigo,
      secondary: pink,
      error: red,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold: 3,
      // Used to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });
  const [options, setOptions] = useState({})

  const apiURI = 'https://option-scanner-backend.herokuapp.com/unusualOptions'
  //'http://localhost:8000/unusualOptions'

  //Function to collect API data while page loading
  useEffect(() => {
    getData()
  }, [])
  async function getData () {
    await axios(apiURI)
      .then(response => {
        setOptions(response.data)
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
      })
      .finally(() => {})
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route exact path='/'>
          {options.length > 0 ? <Paper><Options options={options} /> </Paper>: <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
>
  <CircularProgress color='secondary' size='10rem' />
</Box>}
        </Route>
        <Route exact path='/options/:id'>
          <Paper> <Option /></Paper>
         
        </Route>
        <Route exact path ='/dashboard/:id'>
          <Dashboard/>
        </Route>
      </Router>
    </ThemeProvider>
  )
}

export default App
