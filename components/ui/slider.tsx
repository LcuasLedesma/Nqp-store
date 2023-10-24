"use client";

import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import { Product, Workshop } from "@/type";
import usePreviewModal from "@/hooks/use-preview-modal";
import IconButton from "./icon-button";
import { Expand, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Slider from "react-slick";

export default function SliderImages({
  images,
  title,
  data,
}: {
  images: string[];
  title: string;
  data: Product[] | Workshop[];
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const prewiewModal = usePreviewModal();
  const [isLoading, setIsLoading] = useState(true);

  const totalPages = Math.ceil(images.length / 3);

  const onPreview = (product: Product) => {
    prewiewModal.onOpen(product);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };
  return (
    <div className="flex-col overflow-hidden h-full rounded-lg transition-all duration-1000">
      <h3 className="font-bold text-3xl flex items-center justify-center ">
        {title}
      </h3>
      <div
        className="flex gap-8 transition-all duration-1000 mb-10 mt-6 max-h-[711px]"
        style={{
          transform: `translateX(-${currentImageIndex * 102.5}%)`,
        }}
      >
        {data.map((product, index) => (
          <div className="cursor-pointer w-full relative group" key={index}>
            <div className="overflow-hidden">
              {product.images?.[0]?.url.split("/")[4] === "image" ? (
                <div>
                  <div
                    className={cn(
                      "hidden justify-center  items-center h-full min-h-[711px] min-w-[405px]",
                      isLoading && "flex"
                    )}
                  >
                    <Loader2 className={cn("animate-spin w-20 h-20")} />
                  </div>
                  <Image
                    src={product.images?.[0]?.url}
                    key={index}
                    alt="slider"
                    width={400}
                    height={400}
                    onLoad={() => setIsLoading(false)}
                    className={cn(
                      "object-cover transition-all cursor-pointer duration-1000 hover:scale-105 hover:shadow-xl h-full max-h-[711px] min-w-[405px]",
                      isLoading && "opacity-0 w-0 h-0"
                    )}
                  />
                </div>
              ) : (
                <video
                  src={product.images?.[0]?.url}
                  onLoadedData={() => setIsLoading(false)}
                  controls
                  width={400}
                  height={400}
                  className="object-cover cursor-pointer h-full max-h-[711px] min-w-[405px]"
                />
              )}
            </div>
            {product.images?.[0]?.url.split("/")[4] === "image" ? (
              <IconButton
                className="absolute left-1/2 -translate-x-1/2 bottom-5 opacity-0 group-hover:opacity-100"
                onClick={() => onPreview(product)}
                icon={<Expand size={20} className="text-gray-600 " />}
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-8">
        <AiOutlineArrowLeft
          className=" z-100 w-5 h-5 rounded-full cursor-pointer bg-bgColor text-font bottom-12"
          onClick={prevImage}
        />
        <AiOutlineArrowRight
          className=" z-10 flex items-center justify-center w-5 h-5 rounded-full cursor-pointer bg-bgColor text-font bottom-12"
          onClick={nextImage}
        />
      </div>
    </div>
  );
}
