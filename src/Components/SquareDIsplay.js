import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';

const SquareDisplay = (props)=>{
  const styles = useStyles();
  
  return(
    <div className={styles.base}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
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

});


export default SquareDisplay;