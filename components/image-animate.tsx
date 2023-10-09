"use client";

import Image from "next/image";
import logo from "../public/logo.png";
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

  return (
    <div className="flex justify-center w-full h-[200px] gap-10">
      <Image
        img-to-animate="left"
        className="opacity-0 transition-all duration-800 ease-in-out"
        width={200}
        height={100}
        alt=""
        src={logo}
      />
      <Image id="" width={200} height={100} alt="" src={logo} />
      <Image
        className="opacity-0 transition-all duration-800 ease-in-out"
        img-to-animate="right"
        width={200}
        height={100}
        alt=""
        src={logo}
      />
    </div>
  );
};

export default ImageAnimate;
