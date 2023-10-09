import { Text } from "@/components/ui/text";
import about from "../../../public/about.jpg";
import Image from "next/image";
import Socials from "@/components/socials";
import { List } from "@/components/list";
import ImageAnimate from "@/components/image-animate";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Wraper from "@/components/wraper";

const About = () => {
  return (
    <Wraper>
      <div className="flex flex-col gap-16 lg:mx-[10rem] md:mx-[5rem]">
        <div className="md:grid lg:flex lg:flex-col gap-10 justify-center items-center ">
          <div className=" flex flex-col gap-10 text-center items-center justify-center">
            <h1 className="text-4xl pb-5 ">Conocenos!</h1>
            <Text />
            <Socials />
          </div>
          <div className="flex flex-col lg:flex-row w-full h-full lg:h-[600px] relative">
            <Image
              src={about}
              alt="about"
              width={300}
              height={400}
              className="object-cover border-[2px] border-black mx-auto"
            />
            <Image
              src={about}
              alt="about"
              width={300}
              height={400}
              className=" object-cover border-[2px] border-black mx-auto"
            />
            <Image
              src={about}
              alt="about"
              width={300}
              height={400}
              className=" object-cover border-[2px] border-black  mx-auto"
            />
          </div>
        </div>
        <div className="">
          <ImageAnimate />
        </div>
        <div>
          <h1 className="text-4xl pb-5">Entrevistas</h1>
          <List />
        </div>
        <div className="informativeText">
          <ul>
            <li>
              2015 - Ganadores del concurso “Misiones Diseña” de la
              Subsecretaría de Cultura de la Provincia de Misiones.
            </li>
            <li>
              2018 - Premio “Diseño Sustentable” de la Feria de Artesanías del
              Mercosur (FAM)
            </li>
            <li>
              2019 - Ganadores Beca “Creación” del Fondo Nacional de las Artes
              para Proyecto PAR&Co
            </li>
            <li>
              2019 - Ganadores “Concurso Nacional Potenciar” del Ministerio de
              Desarrollo Social de la Nación.
            </li>
            <li>
              2019 - Nominación “Premios Arandú” a la trayectoria, categoría
              artes visuales del Honorable
            </li>
            <li>Concejo Deliberante de la Ciudad de Posadas.</li>
            <li>
              Muestra artística individual en el Museo Yaparí (2019) Museo
              Gastòn Dachary (2020)
            </li>
            <li>espacio Multicultural de la Costanera de Posadas (2022)</li>
            <li>
              2021/2022 - Beneficiarios “MANTA” programa de la Secretaría de
              Desarrollo Cultural y el Mercado de Artesanías Tradicionales e
              Innovadoras Argentinas.
            </li>
            <li>
              Representantes de Misiones en la Feria "Puro Diseño" de la Rural
              de Bs As.
            </li>
          </ul>
        </div>
      </div>
    </Wraper>
  );
};

export default About;
