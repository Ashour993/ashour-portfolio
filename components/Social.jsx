import Link from "next/link";

import { FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Ashour993" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ashour-malik-ismail-9b5955222/" },

];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
