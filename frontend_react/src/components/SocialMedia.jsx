import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <FaGithub />
        </div>
        <div>
            <AiFillLinkedin />
        </div>
    </div>
  )
}

export default SocialMedia