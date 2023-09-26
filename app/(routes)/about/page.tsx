import { Text } from "@/components/ui/text";
import about from "../../../public/about.jpg";
import Image from "next/image";
import Socials from "@/components/socials";
import { BsPlayFill } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-10 h-full mx-10">
        <div className="w-full flex flex-col gap-10 text-center items-center justify-center">
          <h1 className="text-4xl pb-5">Conocenos!</h1>
          <Text />
          <Socials />
        </div>
        <Image
          src={about}
          alt="about"
          width={400}
          height={400}
          className="object-contain items-center justify-center w-full max-h-[800px] aspect-[3/6]"
        />
      </div>
      <div className="pt-10">
        <ul>
          <li className="flex gap-4">
            <BsPlayFill />
            <a href="https://www.youtube.com/watch?v=sIixpVIvGik">
              Entrevista Gurises al teatro
            </a>
          </li>
          <li className="flex gap-4">
            <BsPlayFill />
            <a href="https://www.elterritorio.com.ar/noticias/2018/02/15/568831-cuando-reciclar-">
              Entrevista Radio Circus
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
