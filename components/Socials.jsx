import Link from "next/link";
import {FaGithub, FaLinkedinIn} from "react-icons/fa"

const socials = [
    {icon:<FaGithub />, path:"https://github.com/Abdullah13131/"},
    {icon:<FaLinkedinIn />, path:"https://www.linkedin.com/in/abdullah1313/"},

];
const Socials = ({containerStyles, iconStyles}) =>{
    return <div className={containerStyles}>
        {socials.map((social, index) =>{
            return <Link 
            key={index} 
            href={social.path} 
            className={iconStyles}>
                {social.icon}
            </Link>
        })}
        </div>
};

export default Socials;