import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    const skillsQuery = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {/* mapping the skills */}

          { skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={ { duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >

              <div className='app__flex' style={{ backgroundColor: skill.bgColor}}>

                <img src={urlFor(skill.icon)} alt={skill.name} />
                
              </div>
               
            </motion.div>

          ))}
          </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');
