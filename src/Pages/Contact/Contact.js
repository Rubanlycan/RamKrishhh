import React from 'react'
import { HeaderWrapper } from './Contact.style'
import { ColorCodes } from '../../constants/constant'
import { FaHandshake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import {  FaInstagram }  from 'react-icons/fa'

const Contact = () => {
  return (
    <div style={{ paddingBottom: 20,marginTop:10 }}>
      <HeaderWrapper>
        <h1 style={{ color: ColorCodes.primaryColor }}>Contact</h1>
      </HeaderWrapper>
      <div style={{display:'flex',justifySelf:'center',height:400,width:1000,border:`2px solid ${ColorCodes.primaryColor}`,borderRadius:10}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:"30%", backgroundColor:ColorCodes.primaryColor}}>
            <FaHandshake size={200} color='#fff'/>
        </div>
        <div style={{display:'flex', width:'70%',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-evenly',marginLeft:'10%'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <MdEmail color={ColorCodes.primaryColor} size={48}/>
                <a  style={{color:'inherit',textDecorationLine:'none'}} target='_blank'  href="mailto:musickrishhh@gmail.com"><p style={{fontSize:20,color:ColorCodes.primaryColor,marginLeft:10,}}>musickrishhh@gmail.com</p></a>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <FaYoutube color={ColorCodes.primaryColor} size={48}/>
                <a style={{color:'inherit',textDecorationLine:'none'}} target='_blank' href='https://www.youtube.com/@krishhhtunes'><p style={{marginLeft:10,fontSize:20,color:ColorCodes.primaryColor}}>Krishhh Tunes</p></a>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <FaInstagram color={ColorCodes.primaryColor} size={48}/>
                <a style={{color:'inherit',textDecorationLine:'none'}} target='_blank' href='https://www.instagram.com/musickrishhh/'><p style={{marginLeft:10,fontSize:20,color:ColorCodes.primaryColor}}>Krishhh Tunes</p></a>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Contact