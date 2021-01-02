import React from 'react';
import ReactDOM from 'react-dom';

import Button from "@material-ui/core/Button";

import { makeStyles } from '@material-ui/core/styles';


const FullScreenBar = (props)=>{
   
   const classes = useStyles(props);
   
   const checkMobile=()=>{
      console.log(props.isMobile)
      if(props.isMobile === true){
         //render mobile
         props.direction = 'column';
      }else{
         //render normal
         props.direction = 'row';
      }
   }
   
   const checkChildren=()=>{
      if (props.children){
         return (
           <div className={classes.child}>
              {props.children}
           </div>
         )
      }
   }
   
   return(
      <div className={classes.background} onLoadStart={()=> checkMobile}>
         <div className={classes.imageHolder}>
            <img className={classes.image} src={props.imgSrc}/>
         </div>
         {/*<h1 className={classes.textStyle}>{props.textShow}</h1>*/}
         {checkChildren()}
      </div>
   )
}

export default FullScreenBar;

const useStyles = makeStyles({
   background: {
      background: props => props.bgColor,
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: '#333344',
      padding: '0 30px',
      
      display: "flex",
      width: "auto",
      minHeight: window.innerHeight,
      
      textAlign: "center",
      flexDirection:'row',
      justifyContent:"center",
      alignItems:"center",
      
   },
   
   textStyle:{
      // position:"absolute",
      // bottom:'10px',
      display: "block",
      flex: 1,
   },
   
   imageHolder:{
      // position:"absolute",
      flex: 2,
      borderRadius:'50%',
   
      maxHeight: '90%',
      width:"auto",
   
   
      overflow: "hidden"
   
   },
   
   image:{
      maxHeight: "40%",
      width:'auto',
      opacity:'.95',
   },
   
   child:{
      flex: 1,
      zIndex:'1'
   },
});
