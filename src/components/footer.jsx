import { emojiIcon } from "@/utils/icons";

const Footer = () => {
  return (
    <>
      <footer className="px-10 bg-secondary border-t border-white/[.2] text-white py-3 w-screen flex items-center gap-1.5 justify-center">
        {emojiIcon}
        <span className="mt-0.5">Thanks for scrolling that's all.</span>
      </footer>
    </>
  );
};
export default Footer;
