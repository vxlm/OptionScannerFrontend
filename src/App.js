// import logo from './logo.svg'
// import './App.css'
import Option from './components/Option.js'
import { useEffect, useState } from 'react'
import Options from './components/Options.js'
import axios from 'axios'
import React from 'react'
import Button from './components/Button.js'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import { CircularProgress } from '@material-ui/core'
import { Container } from '@material-ui/core'

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
          {options.length > 0 ? <Options options={options} /> : <Container fixed><CircularProgress /></Container>}
        </Route>
        <Route exact path='/options/:id'>
          <Option />
        </Route>
        <Route exact path = '/chart'>
          <Button/>
        </Route>
      </Router>
    </ThemeProvider>
  )
}

export default App
