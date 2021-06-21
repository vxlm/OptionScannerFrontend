import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export const Deposits=(props) =>{
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Volume*Price</Title>
      <Typography component="p" variant="h4">
        ${props.data['0']['symbols'][0]['historical'][0]['volume']*props.data['0']['symbols'][0]['historical'][0]['last']*100}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Assuming all buys, at last available price
      </Typography>

    </React.Fragment>
  );
}
export default Deposits