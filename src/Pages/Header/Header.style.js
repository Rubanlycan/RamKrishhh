import React from 'react';
import styled from 'styled-components';
import {ColorCodes} from '../../constants/constant'

// Styled components
export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height:70px;
  width: 100%;
  background-color: ${ColorCodes.primaryColor};
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding-left:20px;
  padding-right:20px;
`;

export const Logo = styled.img`
height:40px;
width:40px;
border-radius:20px;
`;

export const LeftHeader = styled.div`
display:flex;
align-items:center;
`;

export const TextWrapper =styled.p`
font-size:20px;
color:#fff;
margin-left:16px;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin: 0 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #000; 
  }
`;


