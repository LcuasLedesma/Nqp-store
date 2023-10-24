import { BsPlayFill } from "react-icons/bs";

export const List = () => {
  return (
    <div className="flex gap-8 informativeText text-sm">
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center text-center">
        <li className="flex gap-4 items-center text-center ">
          <BsPlayFill />
          <a href="https://www.youtube.com/watch?v=sIixpVIvGik">
            Entrevista Gurises al teatro
          </a>
        </li>
        <li className="flex gap-4 items-center ">
          <BsPlayFill />
          <a href="https://www.elterritorio.com.ar/noticias/2018/02/15/568831-cuando-reciclar-">
            Entrevista Radio Circus
          </a>
        </li>
        <li className="flex gap-4 items-center">
          <BsPlayFill />
          <a href="https://www.elterritorio.com.ar/noticias/2018/02/15/568831-cuando-reciclar-se-convierte-en-un-emprendimiento-artistico">
            Diario El Territorio:
          </a>
        </li>
        <li className="flex gap-4 items-center">
          <BsPlayFill />
          <a href="https://www.ugd.edu.ar/noticias/1416-ugd-sustentable-celebracion-del-dia-mundial-del-reciclaje">
            Radio UGD
          </a>
        </li>

        <li className="flex gap-4 items-center">
          <BsPlayFill />
          <a href="http://bienteveocomunicacion.com.ar/2019/07/25/trabajan-en-el-reciclado-y-la-reutilizacion-de-residuos-como-generadores-de-vinculos-y-de-ingresos-economicos/">
            Entrevista Radio:
          </a>
        </li>
        <li className="flex gap-4 items-center">
          <BsPlayFill />
          <a href="https://www.elreportero.info/2020/08/21/creo-que-hay-una-nueva-generacion-de-padres-mas-conscientes-del-consumo-de-los-juguetes/">
            Entrevista El Reportero:
          </a>
        </li>
        <li className="flex gap-4 items-center">
          <BsPlayFill />
          <a href="https://infomontoya.isparm.edu.ar/noticia/1342/diseno-sustentabilidad-y-emprendimientos">
            Charla en la carrera de Diseño:
          </a>
        </li>
        <li className="flex gap-4 items-center">
          <BsPlayFill />
          <a href="https://www.primeraedicion.com.ar/nota/100331010/emprender-combinando-el-cuidado-del-medio-ambiente-y-el-arte/">
            Diario Primera Edición:
          </a>
        </li>

        <li className="flex gap-4 items-center">
          <BsPlayFill />
          <a href="https://www.facebook.com/carolana.conversar/videos/393597662127626">
            Entrevista Workshop Rosario:
          </a>
        </li>
        <li className="flex gap-4 items-center">
          <BsPlayFill />
          <a href="https://www.instagram.com/p/BqPhNSPD_1T/?utm_medium=copy_link&fbclid=IwAR0udpHvabk97KR8V3lG8uzq4cIF2yDKG-9-4r5VYpKbvqz6o5O8s4fG-Lk">
            Fundacion Artesania Mercosur:
          </a>
        </li>
        <li className="flex gap-4 items-center">
          <BsPlayFill />
          <a href="https://www.youtube.com/watch?v=KlgsfTriMag">
            Entrevista Canal 12:
          </a>
        </li>
      </ul>
    </div>
  );
};
