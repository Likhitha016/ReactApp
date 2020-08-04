import React from 'react';
import { makeStyles,Grid,Typography,Button } from '@material-ui/core';
import ItemsList from "../../organisms/menuItems/menu"
import Searchbox from "../../atoms/inputField/input"
import ItemsData from "../../../itemsList"
import MediaCard from "../../molecules/cards/card"
import TableCard from '../../molecules/cards/tableCard';
import useOrderCountHook from "../../../useOrderCountHook"

const useStyles = makeStyles({
    heading:{  
        textAlign:"center",
        paddingTop:"30px",
        fontSize:"30px",
        // position:"fixed",
        // paddingLeft:"30px"
    },
    heading2:{
        fontFamily:"poppins",
        textAlign:"center",
        paddingTop:"30px",
        fontSize:"30px"
    },
    searchBox:{
        paddingLeft:"80px",
        paddingBottom:"50px"        

    },
    menuDiv:{
        alignSelf:"center",
        paddingRight:"0px",
    },
    searchBoxTable:{
         paddingBottom:"30px"
    },
    tableDiv:{
        paddingLeft:"110px",
        paddingBottom:"280px",
    },
    tab:{
        float:"right"      
    },
    menu:{
        float:"left",
    },
    result:{
        paddingTop:"20px",
         width:"210px",
        paddingLeft:"0px",
        float:"left",
        // width:"25%"
    },
    ordersButton:{
        paddingTop:"10px"
    }
    
});

export default function LandingPage(){
    
    const classes = useStyles();
    const [searchMenu,setSearchMenu]=React.useState("")
    const [count,setCount]=React.useState(0)
    const [price,setPrice]=React.useState(0)
    const order=useOrderCountHook()
    const searchResults=ItemsData.filter((item)=>{
        if(searchMenu==null) 
        {
            return null;
        }
        else if(item.imageName.toLowerCase().includes(searchMenu.toLowerCase())){
            return item;
        }
    });
    const handleDragOver =(event)=>{
        let p=event.target.parentElement.parentElement.children[0].children[1].children[2].textContent
        var pri=p.replace("/-"," ")
        console.log()
        event.preventDefault()
        event.dataTransfer.setData("price",pri)
        console.log("***")
    };
    const resultList=searchResults.map((item)=>{
        return(
            <div className={classes.result}>
                <Grid xs={12}>
                    <Grid  spacing={2} direction="column" justify="center" alignItems="center" xl={3} >
                        <MediaCard
                            imagePath={item.imagePath}
                            imagesTitle={item.imagesTitle}
                            imageName={item.imageName}
                            imageDescription={item.imageDescription}
                            imagePrice={item.imagePrice}
                            onDragOver={handleDragOver}                            
                        />
                    </Grid>
                </Grid>
            </div>
        );
    });
    const handleOnChange = (event) =>{
        const searchedItem=event;
        setSearchMenu(searchedItem);        
        // console.log(event);
    };
    const incrementOrderCount=()=>{
        order.changeOrderCount()
        console.log(order.orderCount.count)
        
        // document.write(order.orderCount.count)
    }
    const handleDragEnter =(event)=>{
        event.preventDefault()
        // return  <h4>count:{order.orderCount.count}</h4>
        console.log(event.target.parentElement.parentElement)
        // this.incrementOrderCount()
        setPrice(price)
        console.log(price)
        console.log(event.target.parentElement.parentElement.children[0])
    };
    return(
        <div  className={classes.image}>
        <div className={classes.menu}>
            <Grid container item xl={6} spacing={2} direction="row" justify="center" alignItems="center" >
                <div className={classes.menuDiv} >
                    <Typography className={classes.heading}>
                        {"Menu"}
                    </Typography>
                    <div className={classes.searchBox}>
                        <Searchbox 
                            placeholder="Search items"
                            onChange={handleOnChange}
                            searchMenu={searchMenu}   
                        />                        
                    </div>
                    {/* <ItemsList></ItemsList> */}
                    <div>
                        {resultList}
                    </div>
                </div>
                </Grid>
                </div>
                <div className={classes.tab}>
                <Grid container  direction="row" justify="center" alignItems="center" item xs={5}  >
                    <div className={classes.tableDiv} >
                        <Typography className={classes.heading2}>
                            {"Tables"}
                            
                        </Typography>
                        <div className={classes.searchBoxTable}>
                            <Searchbox 
                                placeholder="Search tables"
                            />
                        </div> 
                        <Grid container spacing={2} direction="column" justify="flex-start" alignItems="flex-start">
                            <TableCard
                                tableNumber="Table1"
                                price={price}
                                quantity={count}
                                className={classes.color}
                                onDragEnter={handleDragEnter}
                            >
                            </TableCard>
                            <TableCard
                                tableNumber="Table2"
                                price={price}
                                quantity={count} 
                                onDragEnter={handleDragEnter} 
                            >
                            </TableCard>
                            <div className={classes.ordersButton} >
                                <Button
                                variant="contained" 
                                color="primary"
                                onClick={incrementOrderCount}
                                >
                                    {"Total orders"}
                                </Button>
                            </div>
                           
                        </Grid> 
                    </div>
                </Grid>
                </div>
        </div>
    );
}