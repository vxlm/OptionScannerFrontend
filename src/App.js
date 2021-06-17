// import logo from './logo.svg'
// import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Options from './components/Options.js'
import DarkModeToggle from 'react-dark-mode-toggle'
import AddOption from './components/AddOption.js'
import axios from 'axios'
import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
function App () {
  //Dark theme const
  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  })
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
      {options.length > 0 ? <Options options={options} /> : 'Loading'}
    </ThemeProvider>
  )
}

export default App
