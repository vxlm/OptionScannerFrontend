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
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}


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
            <TableCell>Total Volm</TableCell>
            <TableCell>Open Interest</TableCell>
            <TableCell>Volm/oi</TableCell>
            <TableCell align="right">Last</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.symbol}>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.totalVolume}</TableCell>
              <TableCell>{row.openInterest}</TableCell>
              <TableCell>{row['volm/openInt']}</TableCell>
              <TableCell align="right">{row.last}</TableCell>
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