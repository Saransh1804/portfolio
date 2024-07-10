import React, { useRef } from 'react';
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Lingio - Connect",
        img: "/Lingio1.png",
        desc: "This platform offers two interfaces — One for students and another for tutors—enabling seamless interaction through chat and video calls for classes. Students can book tutors using Stripe payments, leave reviews, and search or sort tutors based on various criteria. The site is fully responsive, ensuring a smooth experience on mobile devices",
        link: "https://lingio-connect-l8k2.onrender.com",
        codeLink: "https://github.com/Saransh1804/Lingio_Connect",
        tutorDemoLink: "https://lingio-connect-tutor.onrender.com/"
    },
    {
        id: 2,
        title: "Snappy Chat App",
        img: "/snappy1.png",
        desc: "Snappy is a chat application built with React.js, MongoDB, Node.js, Express.js, and Socket.IO, enabling real-time user communication. It features secure login and signup functionalities, and a modern, intuitive user interface. The app integrates live APIs and Socket.IO for seamless chatting and ensures optimal performance on various devices.",
        link: "https://chat-snappy-app.netlify.app/",
        codeLink: "https://github.com/Saransh1804/snappy-chat"
    },
    {
        id: 3,
        title: "e-commerce",
        img: "/e-commerce.png",
        desc: "Created a full-stack E-commerce website leveraging React.js for frontend interactivity and Node.js with Express for robust backend functionality. MongoDB ensured efficient data management, while Redux facilitated scalable state management. Secure user authentication and a responsive Admin panel were implemented, integrating Stripe for seamless payment processing. Firebase enhanced image storage capabilities, ensuring optimal performance and user experience.",
        link: "https://e-commerce-sara.netlify.app",
        codeLink: "https://github.com/Saransh1804/e-commerce"
    },
    {
        id: 4,
        title: "Info Extractor",
        img: "/Infoextractor.png",
        desc: "This project is an innovative information extractor that provides detailed descriptions of uploaded images. Leveraging the Google Gemini API key, users can upload an image and ask any question related to it, receiving accurate and context-aware responses. This project showcases the capabilities of generative AI in understanding and interpreting visual content.",
        link: "https://visionpy-rpud9twvj2ibn4kb8meeh6.streamlit.app/",
        codeLink: "https://github.com/Saransh1804/Gemini-apps/blob/main/vision.py"
    },
    {
        id: 5,
        title: "AMC Paper",
        img: "/paper.png",
        desc: "Pioneered cutting-edge research in Automatic Modulation Classification (AMC) using advanced deep learning architectures. Developed an innovative CNN-based AMC system achieving 94.40% accuracy at high SNR levels, pushing the boundaries of wireless signal processing. Engineered and optimized novel DenseNet models for improved modulation recognition. This research contributes significantly to intelligent signal processing and showcases the potential of deep learning in enhancing wireless communication systems.",
        link: "https://drive.google.com/file/d/1V83WWwmnT2CPuj_KhV7XRbOHLuCllVpn/view",
        codeLink: "https://github.com/Saransh1804/Gemini-apps/blob/main/vision.py"
    },
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className='container'>
                <div className='wrapper'>
                    <div className='imageContainer' ref={ref}>
                        <img src={item.img} alt={item.title}></img>
                    </div>
                    <motion.div className='textContainer' style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <div className='buttons'>
                            {item.id === 1 && (
                                <>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <button>Student Demo</button>
                                    </a>
                                    <a href={item.codeLink} target="_blank" rel="noopener noreferrer">
                                        <button className='Code'>Code</button>
                                    </a>
                                    <a href={item.tutorDemoLink} target="_blank" rel="noopener noreferrer">
                                        <button>Tutor Demo</button>
                                    </a>
                                </>
                            )}
                            {item.id !== 1 && (
                                <>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <button>{item.id === 5 ? 'See Paper' : 'See Demo'}</button>
                                    </a>
                                    <a href={item.codeLink} target="_blank" rel="noopener noreferrer">
                                        <button className='Code'>Code</button>
                                    </a>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className='progressBar'></motion.div>
            </div>
            {items.map(item => <Single key={item.id} item={item} />)}
        </div>
    );
};

export default Portfolio;
