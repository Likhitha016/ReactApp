import React from 'react';
import { makeStyles,Grid } from '@material-ui/core';
import TableCard from '../../molecules/cards/tableCard';

const useStyles = makeStyles({
    color:{
        background:`linear-gradient(to bottom, rgba(22, 101, 216, 0.37), rgba(22, 101, 216, 0.81))`
    }
});
export default function TablesList(){
    const classes = useStyles();
    return(

    <Grid container spacing={2} direction="column" justify="flex-start" alignItems="flex-start">
        <TableCard
           tableNumber="Table1"
           price="Rs.1050"
           quantity="Total items:4"
           className={classes.color}
        >
        </TableCard>
        <TableCard
            tableNumber="Table2"
            price="Rs.950"
            quantity="Total items:2"  
        >
        </TableCard>
    </Grid> 
    );
}