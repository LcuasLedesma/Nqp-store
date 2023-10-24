"use client";

import Image from "next/image";
import juguete from "@/public/about/robot recortado2.png";
import palabra1 from "@/public/about/juguetes hechos a mano1.png";
import palabra2 from "@/public/about/juguetes hechos a mano2.png";
import { useEffect } from "react";

const ImageAnimate = () => {
  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.getAttribute("img-to-animate") === "left") {
            entry.target.classList.add("sideLeft");
          } else if (entry.target.getAttribute("img-to-animate") === "right") {
            entry.target.classList.add("sideRight");
          }
        } else {
          if (entry.target.getAttribute("img-to-animate") === "left") {
            entry.target.classList.remove("sideLeft");
          } else if (entry.target.getAttribute("img-to-animate") === "right") {
            entry.target.classList.remove("sideRight");
          }
        }
      });
    });
    const img = document.querySelectorAll("[img-to-animate]");
    img.forEach((el) => {
      observe.observe(el);
    });
  }, []);

  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.getAttribute("img-to-animate") === "down") {
            entry.target.classList.add("sideDown");
          } else if (entry.target.getAttribute("img-to-animate") === "up") {
            entry.target.classList.add("sideUp");
          }
        } else {
          if (entry.target.getAttribute("img-to-animate") === "down") {
            entry.target.classList.remove("sideDown");
          } else if (entry.target.getAttribute("img-to-animate") === "up") {
            entry.target.classList.remove("sideUp");
          }
        }
      });
    });
    const img = document.querySelectorAll("[img-to-animate]");
    img.forEach((el) => {
      observe.observe(el);
    });
  }, []);

  return (
    <>
      <div className="hidden lg:flex justify-center w-full h-full gap-10">
        <Image
          img-to-animate="left"
          className="opacity-0 object-contain transition-all duration-800 ease-in-out"
          width={200}
          height={100}
          alt=""
          src={palabra1}
        />
        <Image id="" width={200} height={100} alt="" src={juguete} />
        <Image
          className="opacity-0 object-contain transition-all duration-800 ease-in-out"
          img-to-animate="right"
          width={200}
          height={100}
          alt=""
          src={palabra2}
        />
      </div>
      <div className="flex flex-col lg:hidden justify-centerw-full h-full gap-10">
        <Image
          img-to-animate="down"
          className="opacity-0 object-contain transition-all duration-800 ease-in-out  mx-auto "
          width={200}
          height={100}
          alt=""
          src={palabra1}
        />
        <Image
          id=""
          width={200}
          height={100}
          alt=""
          src={juguete}
          className="mx-auto"
        />
        <Image
          className="opacity-0 object-contain transition-all duration-800 ease-in-out  mx-auto "
          img-to-animate="up"
          width={200}
          height={100}
          alt=""
          src={palabra2}
        />
      </div>
    </>
  );
};

export default ImageAnimate;
