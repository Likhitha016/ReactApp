import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField} from "@material-ui/core";
import ReactSearchBox from 'react-search-box'
const useStyles = makeStyles((theme) => ({
    search:{
        width:"290px",        
        paddingTop:"120px",
        // paddingLeft:"80px",
        // paddingRight:"300px"
    }

}));

const Input = (props)=>{
    const classes = useStyles();
    return(
        <div className={classes.search}>
            <ReactSearchBox
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.searchMenu }
            />      
        </div>      
    );
};

export default Input;