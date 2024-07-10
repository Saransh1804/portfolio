import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220% ",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>HEY, I'M SARANSH GOYAL</motion.h2>
                    <motion.h1 variants={textVariants}>Building dynamic web applications with full-stack and AI prowess."</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.a href="#Portfolio" variants={textVariants}>
                            <button>PROJECTS</button>
                        </motion.a>
                        <motion.a href="https://drive.google.com/file/d/1j7VUhGYKBLEm6O4RGvjy36-xdpXPP_3q/view?usp=sharing" target="_blank" rel="noopener noreferrer" variants={textVariants}>
                            <button>Resume</button>
                        </motion.a>
                    </motion.div>
                    <motion.img src="/scroll.png" variants={textVariants} animate="scrollButton"></motion.img>
                </motion.div>
            </div>
            {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Writer Content Cretor Influencer
            </motion.div> */}
            <div className="imageContainer">
                <img src="/pic1.png" alt=""></img>
            </div>
        </div>
    )
}

export default Hero
