import React from "react";
import { Wrapper, HeaderWrapper,BackWrapper } from "./About.style";
import { ColorCodes } from "../../constants/constant";

const About = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
      <h1 style={{color:ColorCodes.primaryColor}}>About Me</h1>
      </HeaderWrapper>
    <BackWrapper >
      <p style={{color:"#fff",letterSpacing:1,wordSpacing:1}}>

        Hi, I'm Ram Krishnan, from Sound Engineering background passionate in
        sound designing, currently working as freelancer. started my career in
        sound development in 2022 workedon many projects and I also posses
        magical powers of using react to build delightful sound effects.
        Expertise in quality development practices and in pursuing innovative
        ways to create sound effects. Vocal Recording, Foley, SFX, Sound
        Designing, Game Sounds Audio Editing, Dialogue Edit, Basic Mixing.
      </p>
      <p  style={{color:"#fff",letterSpacing:1,wordSpacing:1,fontWeight:'bold'}}>Experience in Tools:</p>
      <ul>
        <li  style={{color:"#fff",}}>Pro tools Ultimate</li>
        <li  style={{color:"#fff",}}>Logic Pro</li>
        <li  style={{color:"#fff",}}>Reaper</li>
      </ul>

      </BackWrapper>
    </Wrapper>
  );
};

export default About;
