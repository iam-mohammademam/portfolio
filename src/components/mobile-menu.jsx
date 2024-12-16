import {
  homeIcon,
  lightIcon,
  listIcon,
  messageIcon,
  stackIcon,
} from "@/utils/icons";
import Link from "next/link";

export const links = [
  { icon: homeIcon, link: "/", name: "Home" },
  { icon: listIcon, link: "about", name: "about" },
  { icon: lightIcon, link: "s", name: "technologies" },
  { icon: stackIcon, link: "/projects", name: "projects" },
  { icon: messageIcon, link: "/contact", name: "contact" },
];
const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  return (
    <>
      <ul className="md:hidden fixed left-1/2 -translate-x-1/2 bottom-3 w-[90%] p-3 rounded-2xl shadow-md flex items-center justify-around border border-white/40">
        {links.map((item, index) => {
          return (
            <Link
              href={item.link}
              className="text-xl hover:scale-105 hover:-translate-y-2 transition-transform duration-200 ease-in-out p-1"
            >
              {item.icon}
            </Link>
          );
        })}
      </ul>
    </>
  );
};
export default MobileMenu;
