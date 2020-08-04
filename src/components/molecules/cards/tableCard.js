import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  }
});

export default function TableCard(props) {
  const classes = useStyles();

  return (
      <div>
          <ButtonBase className={classes.cardAction}
            onClick={props.onClick}
        >
    <Card className={classes.root} variant="outlined" onDragEnter={props.onDragEnter}>
        
        <CardContent>
            <Typography variant="h5" component="h2">
            {props.tableNumber}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {"Price: "}{props.price}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {"Quantity: "}{props.quantity}
            </Typography>
        </CardContent>
       
    </Card>
    </ButtonBase>
    </div>
  );
}
