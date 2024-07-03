//links
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinLine
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {/* <Link href={""} className=" hover:text-blue transition-all duration-300">
        {" "}
        <RiYoutubeLine />
      </Link> */}
      {/* <Link href={""} className=" hover:text-blue transition-all duration-300">
        {" "}
        <RiInstagramLine />
      </Link> */}
      {/* <Link href={""} className=" hover:text-blue transition-all duration-300">
        {" "}
        <RiFacebookLine />
      </Link> */}
      {/* <Link href={""} className=" hover:text-blue transition-all duration-300">
        {" "}
        <RiDribbbleLine />
      </Link> */}
      <Link
        href={"https://github.com/Tanthiel50"}
        className=" hover:text-blue transition-all duration-300"
      >
        {" "}
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/c%C3%A9cile-blin-8ab25a72/"}
        className=" hover:text-blue transition-all duration-300"
      >
        {" "}
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
