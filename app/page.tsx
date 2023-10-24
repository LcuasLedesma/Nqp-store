import Image from "next/image";
import landingImg from "../public/landing/landing.jpg";
import landingLogo from "../public/landing/logo blanco.png";
import text from "@/public/landing/TEXTO.png";
import reciclaje from "@/public/landing/verde recicla.png";

import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex xl:flex-row flex-col w-full h-[100vh]">
      <div className="xl:w-[70%] xl:h-full h-[60vh] order-2 xl:order-1">
        <Image
          src={landingImg}
          alt="landing"
          width={600}
          height={600}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="hidden xl:flex order-1 flex-col p-10 gap-6 xl:py-60 xl:order-2 xl:w-[30%] xl:h-full h-[40vh] bg-black items-center">
        <Link href={"/home"} className="cursor-pointer ">
          <Image
            className="object-contain hover:scale-110 transition duration-500 ease-in-out"
            src={landingLogo}
            alt="landingLogo"
            width={300}
            height={300}
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
          height={200}
          width={200}
          alt="landing-text"
          className="object-contain"
        />
      </div>
      <div className="flex order-1 md:hidden flex-col p-10 gap-4 h-[40vh] bg-black items-center">
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

export default LandingPage;
