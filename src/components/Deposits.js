import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function preventDefault(event) {
  event.preventDefault();
}


export const Deposits=(props) =>{
  console.log(props)
  return (
    <React.Fragment>
      <Title>Put/Call Ratio</Title>


        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Call</TableCell>
              <TableCell>Put</TableCell>
              <TableCell>Call/Put</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
              <TableCell>Volume</TableCell>
                <TableCell>{props.data.callVolm}</TableCell>
                <TableCell>{props.data.putVolm}</TableCell>
                <TableCell>{Math.round(props.data.callVolm/props.data.putVolm*100)/100}</TableCell>


              </TableRow>
              
           
              <TableRow>
              <TableCell>Volume on Exp</TableCell>
                <TableCell>{props.data.callExpVolm}</TableCell>
                <TableCell>{props.data.putExpVolm}</TableCell>
                <TableCell>{Math.round(props.data.callExpVolm/props.data.putExpVolm*100)/100}</TableCell>
                

              </TableRow>
              <TableRow>
              <TableCell>Open Interest</TableCell>
                <TableCell>{props.data.callOpenInt}</TableCell>
                <TableCell>{props.data.putOpenInt}</TableCell>
                <TableCell>{Math.round(props.data.callOpenInt/props.data.putOpenInt*100)/100}</TableCell>
                </TableRow>
                <TableRow>
              <TableCell>Open Interest on Exp</TableCell>
                <TableCell>{props.data.callExpOpenInt}</TableCell>
                <TableCell>{props.data.putExpOpenInt}</TableCell>
                <TableCell>{Math.round(props.data.callExpOpenInt/props.data.putExpOpenInt*100)/100}</TableCell>
                </TableRow>

            
          </TableBody>
        </Table>
      {/* <Typography component="p" variant="h4">


      </Typography> */}
      {/* <Typography color="textSecondary" className={classes.depositContext}>
        Assuming all buys, at last available price
      </Typography> */}

    </React.Fragment>
  );
}
export default Deposits