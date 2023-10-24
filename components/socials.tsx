import Link from "next/link";
import instagram from "../public/svg/instagram.svg";
import facebook from "../public/svg/facebook.svg";
import mail from "../public/svg/mail.svg";
import Image from "next/image";

const UrlLink = ({ url, src }: { url: string; src: string }) => {
  return (
    <Link href={url} className="flex gap-2 items-center">
      <Image src={src} alt="" width={30} height={30} />
    </Link>
  );
};

const Socials = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <UrlLink
        url="https://www.instagram.com/nqp_nadaqueperder/"
        src={instagram}
      />
      <UrlLink
        url="https://www.instagram.com/nqp_nadaqueperder/"
        src={facebook}
      />
      <UrlLink url="https://www.instagram.com/nqp_nadaqueperder/" src={mail} />
    </div>
  );
};

export default Socials;
