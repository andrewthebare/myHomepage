import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";

import igIcon from "./images/IG.png"
import ghIcon from "./images/gitHubIcon.png"
import liIcon from "./images/LinkedIn.png"

const BottomBar = (props) =>{
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <h6>My socials:</h6>

      <a className={classes.smallItem}
         href={'https://github.com/andrewthebare'} target={'_blank'}>
        <Button>
          <img className={classes.Icon} src={ghIcon}/>
        </Button>
      </a>
      
      <a className={classes.smallItem}
         href={'https://www.linkedin.com/in/andrewbareclemson/'} target={'_blank'}>
        <Button>
          <img className={classes.Icon} src={liIcon}/>
        </Button>
      </a>
      
      <a className={classes.smallItem}
         href={'https://www.instagram.com/andrewthebare/'} target={'_blank'}>
        <Button>
          <img className={classes.Icon} src={igIcon}/>
        </Button>
      </a>
      
    </div>
  )
}

export default BottomBar;

const useStyles = makeStyles({
  root:{
    display:"flex",
    alignSelf:"center",
    backgroundColor:"#110101",
    flexDirection:"row",
    justifyContent: "center",
    
    maxHeight:'40px',
    
    position:"relative",
  },
  smallItem:{
    display:"flex",
  },
  iconBG:{
    backgroundColor:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  Icon:{
    height:'25px',
    width:"auto",
  }
});