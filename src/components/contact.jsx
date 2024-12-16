import { SocialIcons } from "@/app/page";
import PageHeading from "./page-heading";

const Contact = () => {
  return (
    <div id="contact" className="py-10 w-screen md:px-[10%] px-[5%] text-white">
      <PageHeading title="contact" tagline="reach out to me." />
      {/* <div className="flex justify-between mx-auto mt-16">
        <div className="w-full">
          <h1 className="mb-6 text-xl font-semibold tracking-wide">
            Got a project? <br />
            let's talk..
          </h1>

          <SocialIcons />
        </div>

        <div className="w-full">
          <h1 className="capitalize mb-5 text-xl font-semibold tracking-wide">
            estimate your project? <br />
            let me know here.
          </h1>
        </div>
      </div> */}
      <div className="mt-16 text-background">
        <form className="flex flex-col gap-3 w-full">
          <input
            type="text"
            placeholder="Your name?"
            className="p-2 outline-none rounded-sm focus:ring-2 ring-primary"
          />
          <input
            type="email"
            placeholder="Your email?"
            className="p-2 outline-none rounded-sm focus:ring-2 ring-primary"
          />
          <textarea
            placeholder="Your message?"
            className="p-2 outline-none rounded-sm focus:ring-2 ring-primary"
          />

          <button className="px-3 py-1.5 text-md bg-foreground text-background rounded-sm">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
