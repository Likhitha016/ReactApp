import React from 'react';
import { makeStyles,Grid } from '@material-ui/core';
import Item from '../../molecules/cards/card';


const useStyles = makeStyles({
    col:{
        paddingTop:"50px",
        width:"260px",
        float:"left"
    },
    col2:{
        width:"228px",
        float:"left"
    },
    
});
export default function ItemsList(){
    const classes = useStyles();
    return(
    <Grid>
        <Grid container spacing={2} direction="row" justify="center" alignItems="center" xl={3}>
            <Item
                imagePath="/static/images/biryani.jpeg"
                imagesTitle="Biryani collection"
                imageName="Biryani"
                imageDescription="Biryani enchances the palette"
                imagePrice="350/-"
            >
            </Item>
            <Item
                imagePath="/static/images/frenchFries.jpeg"
                imagesTitle="French Fries"
                imageName="French Fries"  
                imageDescription="French fries are very good"
                imagePrice="150/-"
            >
            </Item>
            <Item
                imagePath="/static/images/burger.jpeg"
                imagesTitle="Burger"
                imageName="Burger"
                imageDescription="Burger is very very Delicious"
                imagePrice="200/-"
            >
            </Item>
{/*             
        </Grid>
        <Grid className={classes.col}  container spacing={2} direction="column" justify="center" xl={1}>
            <div className={classes.col2}> */}
            <Item
                imagePath="/static/images/pizza.jpeg"
                imagesTitle="Pizza"
                imageName="Pizza"
                imageDescription="Pizza has many flavours"
                imagePrice="200/-"
            >
            </Item>
            <Item
                imagePath="/static/images/momo.jpeg"
                imagesTitle="Momos"
                imageName="Momos"
                imageDescription="Momo has many flavours"
                imagePrice="400/-"
            >
            </Item>
            <Item
                imagePath="/static/images/sandwitch.jpeg"
                imagesTitle="Sandwitch"
                imageName="Sandwitch"
                imageDescription="Sandwitch has many flavours"
                imagePrice="200/-"
            >
            </Item>
            {/* </div> */}
        </Grid>
        
    </Grid>
    );
}