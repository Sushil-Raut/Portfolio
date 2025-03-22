import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
  AiOutlineTwitter,  // Twitter icon from Ant Design
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/126153012?s=400&u=05e602f354adb6ccfd58e2492d1305bb8b211641&v=4"}
          alt="Founder"
        />

        <h2>Sushil Kumar</h2>
        <p>Today is difficult, tomorrow is much more difficult, but the day after tomorrow is beautiful. Most people die tomorrow evening.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/sushil-kumar-aa586723b/" target={"blank"}>
            <AiFillLinkedin/>
          </a>
          <a href="https://www.instagram.com/er_sushil_chaurasia/?hl=en" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Sushil-Raut" target={"blank"}>
            <AiFillGithub />
          </a>          
          <a href="https://x.com/SushilRautk" target={"blank"}>
            <AiOutlineTwitter />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
