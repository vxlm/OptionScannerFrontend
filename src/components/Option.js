import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { FaTimes } from 'react-icons/fa'
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

export const Option = ({ option }) => {
  const classes = useStyles()
  return (
    <div>
      <h3>
        {option.ticker}
        {'  '}
        {option.symbol}
        {'  '}
        {option['volm/openInt']}
        {'  '}
        {option.last}
      </h3>
      <p> {option.price} </p>
    </div>
  )
}

export default Option
