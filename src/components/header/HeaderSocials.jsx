import React from 'react'
import {BsLinkedin, BsInstagram} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/" target='_blank'> <BsLinkedin /> </a>
        <a href="https://www.github.com/" target='_blank'><FaGithubSquare /></a>
        <a href="https://www.instagram.com/" target='_blank'> <BsInstagram /> </a>

    </div>
  )
}

export default HeaderSocials