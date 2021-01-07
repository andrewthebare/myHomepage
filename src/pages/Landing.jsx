import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from "@material-ui/core/Button";


import FullScreenBar from "../FullScreenBar";
import MenuIcon from '@material-ui/icons/Menu';
import BottomBar from "../BottomBar";

import legoMe from "../images/LegoMe.jpg"
import SquareDisplay from "../Components/SquareDIsplay";

function Landing() {
  const classes = useStyles();
  
  const [sidebarOpen, updateSidebar]=useState(false);
  const [isMobile, updateMobile]=useState(true);
  
  console.log(window.innerWidth);
  
  return (
    <div className="App">
      <Button className={classes.list} onClick={()=> {updateSidebar(true)}}>
        <MenuIcon fontSize={"large"}/>
      </Button>
      
      <Drawer PaperProps={classes.sideBar}
              open={sidebarOpen}
              variant={"temporary"}
              onClose={()=>updateSidebar(false)}
      >
        <Button>
          Big Words
        </Button>
      </Drawer>
      <FullScreenBar bgColor={'linear-gradient(70deg, #336B8B 30%, #FF8EF3 90%)'}
                     isMobile={isMobile}
                     imgSrc={legoMe}
                     textShow={"Hi, I'm Andrew Bare"}
      
      >
      </FullScreenBar>
      
      <FullScreenBar bgColor={"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}>
        <h1>I'm a Computer Science student getting a taste for all things coding</h1>
        <h3>Here's some of my work</h3>
        <div>
        {/*  place holder div*/}
          <SquareDisplay/>
        </div>
      </FullScreenBar>
      
      <FullScreenBar bgColor={'linear-gradient(70deg, #33c88B 30%, #FFf3F3 90%)'}
                     isMobile={isMobile}
                     imgSrc={legoMe}
      >
        <div>
          <a href={'/about'}>
            <h2>Not your average Bare</h2>
            <p>paragraph</p>
          </a>
        </div>
      </FullScreenBar>
      
      <BottomBar/>
    
    </div>
  );
}

export default Landing;

const useStyles = makeStyles({
  list: {
    width: 50,
    position: "absolute"
  },
  fullList: {
    width: 'auto',
  },
  sideBar:{
    backgroundColor:'linear-gradient(70deg, #336B8B 30%, #FF8EF3 90%)',
  }
});