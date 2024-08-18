import React from "react";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Youtube from "../assets/youtube.svg";

const Footer = () => {
    return(
        <div className="w-full">
            <footer className="flex justify-evenly items-center bg-primary min-h-16">
                <a href="https://www.instagram.com/ankur.sus/" target="_blank"><img src={Instagram} alt="instagram" className="w-10 p-2 bg-footerbg rounded-lg"/></a>
                <a href="https://x.com/ankur_sus" target="_blank"><img src={Twitter} alt="instagram" className="w-10 p-2 bg-footerbg rounded-lg"/></a>
                <a href="https://github.com/ankyie" target="_blank"><img src={Github} alt="instagram" className="w-10 p-2 bg-footerbg rounded-lg"/></a>
                <a href="https://www.linkedin.com/in/ankur-goon/" target="_blank"><img src={Linkedin} alt="instagram" className="w-10 p-2 bg-footerbg rounded-lg"/></a>
                <a href="https://www.youtube.com/@ankyieYT" target="_blank"><img src={Youtube} alt="instagram" className="w-10 p-2 bg-footerbg rounded-lg"/></a>
            </footer>
        </div>
    )
}

export default Footer;