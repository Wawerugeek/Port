import React, { useState, useEffect } from 'react';
import ReactTolltip from 'react-tooltip';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {
  return (
    <>
    <h2 className='head-text'> skills & Experience </h2>
    </>
  )
}

export default AppWrap(Skills, 'skills')