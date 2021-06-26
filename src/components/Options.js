import React from 'react'
import Link from '@material-ui/core/Link'
import { DataGrid } from '@material-ui/data-grid'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const columns = [
  {
    field: 'symbol',
    headerName: 'symbol',
    width: 200,
    renderCell: params => (
      <Link href={`/dashboard/${params.value}`}>{params.value}</Link>
    )
  },
  {
    field: 'description',
    headerName: 'description',
    width: 300,
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
  }
]
export const Options = (props) => {
  return (
    <div style={{ height: 2000, width: '100%' }}>
      <Grid>
      <HideOnScroll {...props}>
        <AppBar style={{ position: 'relative' }}>
          <Toolbar>
            <Typography variant="h6">Unusual Options Scanner</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      </Grid>
      <DataGrid
        rows={props.options}
        columns={columns}
        pageSize={50}
        getRowId={row => row._id}
        autoHeight = 'true'

      />
  
    </div>
  )
}

export default Options
