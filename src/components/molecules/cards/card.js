import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core';
 
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    //paddingBottom:"160px"

  },
  divCard: {
    //paddingTop:"180px",
    paddingLeft:"40px"
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  }
});
export default function MediaCard(props) {
    const classes = useStyles();
  
    return (
    <div className={classes.divCard}>
      <Card className={classes.root} draggable="true" onDragOver={(event)=>props.onDragOver(event)}>
        
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imagePath}
            title={props.imageTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.imageName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.imageDescription}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.imagePrice}{" /-"}
            </Typography>
          </CardContent>
        </CardActionArea>
             
      </Card>
    </div>
    );
  }