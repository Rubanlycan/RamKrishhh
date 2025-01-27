import react from "react";
import styled from "styled-components";
import { ColorCodes } from "../../constants/constant";

export const Wrapper = styled.div`
display:flex;
align-items:flex-start;
justify-content:space-between;
margin-top:12rem;
`;

export const ProfileWrapper = styled.img`
height:300px;
width:300px;
border-radius:150px;
margin-left:10rem;
`;

export const RightWrapper = styled.div`

`;

export const SvgImg = styled.img`
position:absolute;
z-index:-1;
right:0px;
top:60px;

`;

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.3s, text-decoration 0.3s;

  &:hover {
    color: ${ColorCodes.primaryColor}; 
 
  }
`;