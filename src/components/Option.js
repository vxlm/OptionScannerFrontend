import React from 'react'
import axios from 'axios'
import { Historical } from './Historical'
import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import { CircularProgress } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom'

export const Option = props => {
  let { id } = useParams()
  const [specificOption, setSpecificOption] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  const optionURI = `https://option-scanner-backend.herokuapp.com/options/${id}`
  useEffect(() => {
    getData()
  }, [])
  
  async function getData () {
    await axios(optionURI)
      .then(response => {
        setSpecificOption(response.data)
        setIsLoading(true)
      })
      .catch(error => {
        console.error('Error fetching data: ', error)
      })
      .finally(() => {})
  }
  
  console.log(specificOption)
  return(
    
    // Have to use a child component here in order to make sure that our data loads, before we query it with keys, in order to not throw errors.
    <div> {specificOption.keys ? <Historical data={specificOption} /> :<Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <CircularProgress color='secondary' size='10rem' />
  </Box>}
    </div>
  )
}


export default Option
