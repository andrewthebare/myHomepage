import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import ghIcon from "../images/gitHubIcon.png";

const SquareDisplay = (props)=>{
  const styles = useStyles();
  
  const hasRepo = ()=>{
    if (props.ghSource){
      
      return (
        <a className={styles.smallItem}
           href={props.ghSource} target={'_blank'}>
          <Button>
            <img className={styles.Icon} src={ghIcon}/>
          </Button>
        </a>

      )
    }
  }
  
  return(
    <div className={styles.base}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {hasRepo()}
    </div>
  )
}

const useStyles = makeStyles({
  base:{
    width:'98%',
    height:'100%',
    maxHeight:'400px',
    
    border:"solid",
    borderRadius:50,
    
    display:"flex",
    flexDirection:"column",
  },
  smallItem:{
    display:"flex",
    alignSelf: "center",
  },
  iconBG:{
  backgroundColor:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  Icon:{
    height:'25px',
    width:"auto",
  },
  
});


export default SquareDisplay;