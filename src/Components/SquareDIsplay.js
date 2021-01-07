import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';

const SquareDisplay = (props)=>{
  const styles = useStyles();
  
  return(
    <div className={styles.base}>
      Hello
    </div>
  )
}

const useStyles = makeStyles({
  base:{
    width:'400px',
    height:'200px',
    
    border:"solid",
  },

});


export default SquareDisplay;