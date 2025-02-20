import React from 'react'
import { ColorCodes } from '../../constants/constant'
import { HeaderWrapper } from './Services.style'

const SERVICES = [{name:"Vocal Recording","desc":"Vocal recording is the process of capturing a singer's voice to create a recording that sounds as similar as possible to the original performance. It's a key part of the music production process"},
    { name:"Foley",desc:"In filmmaking, Foley is the reproduction of everyday sound effects that are added to films, videos, and other media in post-production to enhance audio quality."},
    {name:"SFX",desc:"SFX is an abbreviation for special effects or sound effects. It's a term used in film and theater to describe unusual actions or sounds that are created using equipment. "} , 
    {name:"Sound Designing",desc:"Sound design is the process of creating soundtracks for a variety of media using audio production techniques. It can involve recording, editing, or creating sounds from scratch. "},
    {name:"Game Sounds Audio Editing", desc:" refers to the process of manipulating and refining recorded audio elements, like sound effects, music, and dialogue, to create the soundscape of a video game, including adjusting volume levels, removing unwanted noise, adding effects, and precisely timing them to match the on-screen action, ultimately enhancing the player's immersion in the game world."},
    {name:"Dialogue Edit"},{name:  "Mixing and mastering"}]
const Services = () => {
  return (
    <div style={{ paddingBottom: 20,marginTop:80 }}>
      <HeaderWrapper>
        <h1 style={{ color: ColorCodes.primaryColor }}>Services</h1>
      </HeaderWrapper>
    <div style={{backgroundColor:ColorCodes.primaryColor,padding:20}}>
        <ul style={{margin:20,cursor:'pointer'}}>
 {
    SERVICES?.map(service=>(
        <li style={{fontSize:18,color:"#fff"}}>{service.name}</li>
    ))
 }
           
        </ul>
        <div>
            <p></p>
            </div>
    </div>
      </div>
  )
}

export default Services