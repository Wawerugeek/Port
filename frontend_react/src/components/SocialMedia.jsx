import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';


const SocialMedia = () => {
    const phoneNumber = '+254701313327';
    const message = "Hello Steve!";

    const whatsappUrl= `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className='app__social'>
        <div>
            <a href='https://github.com/Wawerugeek' target="_blank" rel="noopener noreferrer"> 
                <FaGithub />
            </a>
        </div>

        <div>
            <AiFillLinkedin />
        </div>

        <div>
            <a href='https://twitter.com/Stevemuirurike' target="_blank" rel="noopener noreferrer"> 
                <BsTwitter />
            </a>
        </div>

        <div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"> <RiWhatsappFill /> </a>
        </div>
        
        <div>
            <BsInstagram />
        </div>
    
       
    </div>
  )
}

export default SocialMedia;