import { useEffect, useState } from 'react'
import {
  faSlack,
  faCss3,
  faGithub,
  faHtml5,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
         I am a versatile Web Developer and Competitive Programmer- Combining robust web development skills with a sharp analytical mind honed through competitive programming, delivering innovative and efficient solutions across both domains and looking for an opportunity to work with the latest
            technologies on challenging and diverse projects and serve my learnings.
          </p>
          <p align="LEFT">
         I am a Competitive Programmer with a Passion for Algorithms and Data Structures, continuously honing problem-solving skills through participation in coding competitions on platforms such as Codeforces, LeetCode, and CodeChef.
          </p>
          <p>
          I am skilled in HTML, CSS, JavaScript, React, Node.js, and other cutting-edge frameworks and libraries to create responsive and user-friendly websites.
          I believe in the power of technology to transform lives and am committed to leveraging my skills to create innovative solutions that make a positive impact on the world.
          I am a quick learner and a team player who thrives in fast-paced environments and enjoys collaborating with others to achieve shared goals.
          <p>
          I am passionate about learning and am always looking for opportunities to expand my knowledge and grow as a developer.
          </p>

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSlack} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
