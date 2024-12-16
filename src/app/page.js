import Contact from "@/components/contact";
import LandingPage from "@/components/landing-page";
import Technologies from "@/components/technologies";
import Works from "@/components/works";
import { facebookIcon, githubIcon, linkedinIcon } from "@/utils/icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Technologies />
      <Works />
      <Contact />
    </>
  );
}

export const SocialIcons = () => {
  return (
    <div className="gap-4 text-white flex items-cente">
      <Link href="https://facebook.com/iam.md.emam" className="">
        {facebookIcon}
      </Link>
      <Link href="https://github.com/iam-mohammademam" className="">
        {githubIcon}
      </Link>
      <Link href="https://linkedin.com/" className="">
        {linkedinIcon}
      </Link>
    </div>
  );
};
