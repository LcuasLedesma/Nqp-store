import Image from "next/image";
import landingImg from "@/public/landing/landing.jpg";
import landingLogo from "@/public/landing/logo blanco.png";
import text from "@/public/landing/TEXTO.png";
import reciclaje from "@/public/landing/verde recicla.png";
import Link from "next/link";

const LandingMobileImage = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] md:hidden">
      <div className="h-[60vh] order-2">
        <Image
          src={landingImg}
          alt="landing"
          width={600}
          height={600}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex order-1 flex-col p-10 gap-4 h-[40vh] bg-black items-center">
        <Link href={"/home"} className="cursor-pointer">
          <Image
            className="zoom object-contain"
            src={landingLogo}
            alt="landingLogo"
            width={200}
            height={200}
          />
        </Link>
        <Image
          src={reciclaje}
          height={50}
          width={50}
          alt="landing-reciclaje"
          className="object-contain"
        />
        <Image
          src={text}
          height={150}
          width={150}
          alt="landing-text"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LandingMobileImage;
