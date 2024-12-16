import { arrowIcon } from "@/utils/icons";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="h-[92vh] w-screen md:px-[10%] px-[5%] flex justify-center items-center">
      <div className="md:max-w-md relative text-center text-foreground">
        <span className="">hi there !</span>
        <div className="space-y-3">
          <h1 className="text-3xl my-1">
            i'm
            <span className="ml-2 uppercase font-semibold">mohammad emam</span>
          </h1>
          <h3 className="tracking-wider font-semibold text-xl">
            A Mern stack developer.
          </h3>
          <p className="text-white text-sm font-medium">
            Fond of creating web application designs and bring them to life with
            code and develope mobile designs.
          </p>

          <button className="px-3 py-1.5 text-md bg-foreground text-background rounded-tl-lg">
            <Link
              className="text-bg-primary flex items-center gap-2 font-semibold group hover:pr-2 transition-all duration-200 ease-in-out"
              href="https://drive.google.com/uc?id=12LIJCnY5lVfGw6ogzn_9lJU8SoEqJC-j&export=download"
            >
              Resume
              <span className="group-hover:translate-x-2 duration-200 ease-in-out">
                {arrowIcon}
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
