import { arrowIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  const array = [
    {
      languages: ["reactjs", "nextjs", "tailwindcss"],
      title: "portfolio",
      url: "https://portfolio.mohammademam.me",
      id: 1,
      img: "https://images.pexels.com/photos/29547109/pexels-photo-29547109/free-photo-of-tranquil-cabin-in-a-serene-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="w-full relative text-white space-y-2 group">
      <div className="h-56 w-full overflow-hidden rounded-xl shadow-sm relative group">
        <Link
          href={array[0]?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-0 group-hover:scale-105 left-0 w-full h-full bg-black/20 z-10 flex items-center justify-center transition-transform duration-200 ease-in-out opacity-0 group-hover:opacity-100 backdrop-blur-[.5px]"
        >
          <span className="flex items-center gap-x-1.5 text-white font-medium">
            visit site {arrowIcon}
          </span>
        </Link>
        <Image
          src={array[0]?.img}
          alt="image"
          width={400}
          height={300}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      {/* <div className="border-t">
        <div className="flex items-center gap-x-3">
          {array[0]?.languages?.map((item, index) => {
            return (
              <small key={index} className="shrink-0 text-white">
                {item?.charAt(0)?.toUpperCase() + item?.slice(1)}
              </small>
            );
          })}
        </div>

        <h3 className="whitespace-nowrap w-full text-ellipsis overflow-hidden">
          {array[0]?.title?.charAt(0)?.toUpperCase() +
            array[0]?.title?.slice(1)}
        </h3>
        <Link
          href={array[0]?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 opacity-90 flex items-center gap-1 text-sm font-medium"
        >
          visit site
          {arrowIcon}
        </Link>
      </div> */}
    </div>
  );
};
export default Card;
