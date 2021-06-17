import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { DataGrid } from '@material-ui/data-grid'
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})
const columns = [
  { field: 'symbol', headerName: 'symbol', width: 200 },
  {
    field: 'volm/openInt',
    headerName: 'volm/openIn',
    width: 200,
    type: 'number'
  },
  { field: 'last', headerName: 'last', width: 130, type: 'number' },
  { field: 'totalVolume', headername: 'volm', width: 200, type: 'number' },
  {
    field: 'openInterest',
    headername: 'open Interest',
    width: 200,
    type: 'number'
  },
  {
    field: 'totalCost',
    headername: 'total cost',
    width: 200,
    type: 'number'
  }
]
export const Options = ({ options }) => {
  const classes = useStyles()
  return (
    <div style={{ height: 2000, width: '100%' }}>
      <DataGrid
        rows={options}
        columns={columns}
        pageSize={50}
        getRowId={row => row._id}
      />
    </div>
    // <TableContainer component={Paper}>
    //   <Table className={classes.table} aria-label='simple table'>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Unusual</TableCell>
    //         <TableCell align='right'>Ticker</TableCell>
    //         <TableCell align='right'>Symbol</TableCell>
    //         <TableCell align='right'>VOL/openint</TableCell>
    //         <TableCell align='right'>last</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {options.map(option => (
    //         <TableRow key={option.symbol}>
    //           <TableCell component='th' scope='row'>
    //             {option.symbol}
    //           </TableCell>
    //           <TableCell align='right'>{option.ticker}</TableCell>
    //           <TableCell align='right'>
    //             {(option.totalVolume * option.last * 100).toFixed(2)}
    //           </TableCell>
    //           <TableCell align='right'>
    //             {option['volm/openInt'].toFixed(2)}
    //           </TableCell>
    //           <TableCell align='right'>{option.last}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    // <div>
    //   {options.map(option => (
    //     <Option
    //       key={option.id}
    //       option={option}
    //       onDelete={onDelete}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </div>
  )
}

export default Options
