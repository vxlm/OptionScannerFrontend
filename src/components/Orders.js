import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export  const Orders=(props)=> {
  const classes = useStyles();
  let rows = props.rows
  return (
    <React.Fragment>
      <Title>Similar Unusual Activity</Title>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>% Change</TableCell>
            <TableCell>Volatility</TableCell>

            <TableCell>Total Volm</TableCell>
            <TableCell>Open Interest</TableCell>
            <TableCell>Volm/oi</TableCell>
            <TableCell> Bid</TableCell>

            <TableCell align="right">Ask</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.symbol}>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.percentChange}</TableCell>
              <TableCell>{row.volatility}</TableCell>

              <TableCell>{row.totalVolume}</TableCell>
              <TableCell>{row.openInterest}</TableCell>
              <TableCell>{row['volm/openInt']}</TableCell>
              <TableCell>{row.bid}</TableCell>

              <TableCell align="right">{row.ask}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
        

        </Link>
      </div>
    </React.Fragment>
  );
}
export default Orders