import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import { DataGrid } from '@material-ui/data-grid'

const columns = [
  {
    field: 'symbol',
    headerName: 'symbol',
    width: 200,
    renderCell: params => (
      <Link href={`/options/${params.value}`}>{params.value}</Link>
    )
  },
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
  return (
    <div style={{ height: 2000, width: '100%' }}>
      <DataGrid
        rows={options}
        columns={columns}
        pageSize={50}
        getRowId={row => row._id}
      />
    </div>
  )
}

export default Options
