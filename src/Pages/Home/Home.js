import React from "react";
import { Wrapper, ProfileWrapper, RightWrapper, SvgImg } from "./Home.style";
import { ColorCodes } from "../../constants/constant";

const Home = () => {
  return (
    <Wrapper>
      <ProfileWrapper src={require("../../assets/profile/profile.png")} />
   
      <RightWrapper>
      <div style={{marginRight:'20rem'}}>
          <h3 style={{fontSize:32}}>Hi i'm <span style={{color:ColorCodes.primaryColor}}>Ram</span> Krishnan</h3>
          <h3 >Expertise in Vocal Recording, Foley, SFX and Sound Designing</h3>
        </div>
   
              <SvgImg height={1000} width={1000} src={require("../../assets/svg/hometri.png")} />
      </RightWrapper>
    </Wrapper>
  );
};

export default Home;
