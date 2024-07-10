import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiCodechef } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {'< S A R A N S H / >'}
        </motion.span>
        <div className="social">
          <a href="https://github.com/Saransh1804" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/saransh-goyal-215532244/" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin />
          </a>
          <a href="https://leetcode.com/u/Saranshg1804/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
          <a href="https://www.codechef.com/users/goyal1804" target="_blank" rel="noopener noreferrer">
          <SiCodechef />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
