import React from 'react'
import { color, motion } from 'framer-motion'
import './services.scss'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Services = () => {
  return (
    <motion.div className='services' variants={variants} initial='initial' whileInView={'animate'}>
      <motion.div className='textContainer'>
        <p>
          Leveraging a wide array of skills to drive success <br />
          and innovation in every project.
        </p>
        <hr />
      </motion.div>

      <div className='skills'>
        <div className='row1'>
          <div className='card'>
            <div>
              <img src='/Javascript.jpg' alt='Javascript'></img>
            </div>
            <span>Javascript</span>
          </div>
          <div className='card'>
            <div>
              <img src='/download.jpg' alt='HTML'></img>
            </div>
            <span>HTML</span>
          </div>
          <div className='card'>
            <div>
              <img src='/React js.jpg' alt='React js'></img>
            </div>
            <span>React js</span>
          </div>
          <div className='card'>
            <div>
              <img src='/Tailwind.jpg' alt='Tailwind CSS'></img>
            </div>
            <span>Tailwind CSS</span>
          </div>
          <div className='card'>
            <div>
              <img src='/Mongodb.jpg' alt='Mongodb'></img>
            </div>
            <span>Mongodb</span>
          </div>
          <div className='card'>
            <div>
              <img src='/Node.jpg' alt='Node'></img>
            </div>
            <span>Node</span>
          </div>
          <div className='card'>
            <div>
              <img src='/c++.png' alt='C++'></img>
            </div>
            <span>C++</span>
          </div>
        </div>
        <div className='row2'>
          <div className='card'>
            <div>
              <img src='/python.jpg' alt='Python'></img>
            </div>
            <span>Python</span>
          </div>
          <div className='card'>
            <div>
              <img src='/Express.jpg' alt='Express'></img>
            </div>
            <span>Express</span>
          </div>
          <div className='card'>
            <div>
              <img src='/git.jpg' alt='git'></img>
            </div>
            <span>git</span>
          </div>
          <div className='card'>
            <div>
              <img src='/firebase.jpg' alt='Firebase'></img>
            </div>
            <span>Firebase</span>
          </div>
          <div className='card'>
            <div>
              <img src='/framer.jpg' alt='Framer-Motion'></img>
            </div>
            <span>Framer-Motion</span>
          </div>
          {/* <div className='card'>
            <div>
              <img src='/firebase.jpg' alt='firebase'></img>
            </div>
            <span>firebase</span>
          </div> */}
        </div>
      </div>
    </motion.div>
  )
}

export default Services
