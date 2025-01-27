import React, { useState } from "react";
import { Wrapper, ProfileWrapper, RightWrapper, SvgImg,StyledLink,UL } from "./Home.style";
import { ColorCodes } from "../../constants/constant";
import { TbBrandFiverr } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {

  const [iconSelected,setIconSelected] = useState('')

  return (
    <Wrapper>
      <ProfileWrapper src={require("../../assets/profile/profile.png")} />
   
      <RightWrapper>
      <div style={{marginRight:'30rem'}}>
          <h3 style={{fontSize:40}}>Hi i'm <span style={{color:ColorCodes.primaryColor}}>Ram</span> Krishnan</h3>
          <h3 >Expertise in Vocal Recording, Foley, SFX and Sound Designing</h3>
          <ul style={{display:'flex',gap:28, listStyleType: 'none'}}>
            <li ><StyledLink target="_blank" onMouseOver={()=>setIconSelected('fiver')} onMouseOut={()=>setIconSelected('')}   style={{color: 'inherit', textDecoration: 'none'}} href="https://www.fiverr.com/sellers/krishhhtunes">
              <TbBrandFiverr size={24} color={iconSelected==="fiver"?ColorCodes.primaryColor:"#000"}/>
              </StyledLink>
              </li>
            <li><StyledLink target="_blank" onMouseOver={()=>setIconSelected('insta')} onMouseOut={()=>setIconSelected('')}  style={{color: 'inherit', textDecoration: 'none'}} href="https://www.linkedin.com/in/ramkrishnan-muthuswamy-a21513231/">
              <FaInstagram  size={24}  color={iconSelected==='insta'?ColorCodes.primaryColor:"#000"}/>
              </StyledLink></li>
            <li><StyledLink target="_blank" onMouseOver={()=>setIconSelected('linkedn')} onMouseOut={()=>setIconSelected('')}    style={{color: 'inherit', textDecoration: 'none'}} href="https://www.instagram.com/musickrishhh/profilecard/?igsh=c3NhcHgyc3Vsd2g1">
              <FaLinkedin  size={24}  color={iconSelected==='linkedn'?ColorCodes.primaryColor:"#000"}/></StyledLink></li>
          </ul>
        </div>
   
              <SvgImg height={1000} width={1000} src={require("../../assets/svg/hometri.png")} />
      </RightWrapper>
    </Wrapper>
  );
};

export default Home;
