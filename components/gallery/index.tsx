"use client";

import { Image as ImageType } from "@/type";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className=" w-full relative">
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.url}
          alt=""
          width={600}
          height={400}
          className=" object-cover w-full aspect-[4:3] max-h-[900px] max-w-[600px]"
        />
      ))}
    </div>
  );
};

export default Gallery;
