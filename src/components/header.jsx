import Link from "next/link";
import MobileMenu, { links } from "./mobile-menu";

const Header = () => {
  return (
    <header className="md:px-[10%] px-[5%] bg- text-foreground border-b border-white/20">
      <div className="h-[55px] w-full flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl tracking-wider font-semibold uppercase hover:text-foreground text-slate-200"
        >
          Mohammad Emam
        </Link>
        <ul className="hidden md:flex items-center gap-x-7">
          {links.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="hover:text-foreground text-slate-200 capitalize font-medium"
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
