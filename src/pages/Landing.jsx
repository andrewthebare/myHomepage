import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from "@material-ui/core/Button";


import FullScreenBar from "../FullScreenBar";
import MenuIcon from '@material-ui/icons/Menu';
import BottomBar from "../BottomBar";

import legoMe from "../images/LegoMe.jpg"
import gitHub from "../images/gitHubIcon.png"
import linkedIn from "../images/LinkedIn.png"

import SquareDisplay from "../Components/SquareDIsplay";
import {projectData} from '../projectData'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Landing() {
  const classes = useStyles();
  
  const [sidebarOpen, updateSidebar]=useState(false);
  const [isMobile, updateMobile]=useState(true);
  
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    
    focusOnSelect:true,
  };
  
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
      >
        <h1>Hi, I'm Andrew Bare</h1>
      </FullScreenBar>
      
      <FullScreenBar bgColor={"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}>
        <h1>I'm a Computer Science student getting a taste for all things coding</h1>
        <h3>Here's some of my work</h3>
        <div className={classes.slider}>
          <Slider {...settings}>
            {projectData.map(block=>{
              return(
                <SquareDisplay {...block}/>
              )
            })}
          </Slider>
        </div>
        <h3>Here are my professional socials</h3>
        <div className={classes.socialHolder}>
          <a className={classes.imgHolder} href={'https://www.linkedin.com/in/andrewbareclemson/'}>
            <img src={linkedIn} className={classes.img}/>
          </a>
  
          <a className={classes.imgHolder} href={'https://github.com/andrewthebare'}>
            <img src={gitHub}  className={classes.img}/>
          </a>
        </div>
      </FullScreenBar>
      
      <FullScreenBar bgColor={'linear-gradient(70deg, #33c88B 30%, #FFf3F3 90%)'}
                     isMobile={isMobile}
                     imgSrc={legoMe}
      >
        <div>
          <a href={'/about'}>
            <h2>Not your average Bare</h2>
            <p>Powered by Sweet Tea, I'm a son of the south</p>
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
  },
  
  slider:{
    position:"relative",
    width:'100%',
    maxHeight:'300px',
  },
  
  socialHolder:{
    maxHeight:'200px',
    overflow: "hidden",
    
    display:"flex",
    flexDirection:"row",
    justifyContent: "center"
  },
  imgHolder:{
    display: "block",
    flex:1,
    // maxHeight:'100%',
    // maxWidth:"50%",
  },
  img:{
    objectFit: 'cover',
    maxHeight:'100%',
    width:"auto",
    zIndex:1,
  }
});