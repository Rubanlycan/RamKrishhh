import React, { useState } from "react";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

export const VideoWrapper = styled.div`

  max-width: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`

  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  font-size: 1.5rem;
`;
export const Wrapper = styled.div`
height:100%;
width:100%;
background-color:blue;
`;

export const HeaderWrapper = styled.div`
display:flex;
justify-Content:center;
margin-bottom:70px;
`;
export const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;