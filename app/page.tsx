import Image from "next/image";
import landingImg from "../public/landing.jpg";
import landingLogo from "../public/landingLogo.png";
import reciclaje from "../public/reciclaje.svg";
import test from "../public/R.jpg";

import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="relative h-[100vh] w-full">
      <Image className="object-cover" src={test} alt="Landing" fill />
      <Link href="/home" className="cursor-pointer">
        <Image
          className="absolute bottom-40 left-[40%] hover:scale-110 transition duration-500 ease-in-out"
          src={landingLogo}
          alt="landingLogo"
          width={300}
          height={300}
        />
      </Link>
      <Image
        className="absolute rotate"
        src={reciclaje}
        alt="reciclaje"
        width={150}
        height={150}
      />
    </div>
  );
};

export default LandingPage;
