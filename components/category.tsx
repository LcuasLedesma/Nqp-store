"use client";

import { Category } from "@/type";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CategoryProps {
  data: Category;
}

const Category: React.FC<CategoryProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/category/${id}`);
  };

  return (
    <div className="cursor-pointer w-full overflow-hidden relative group">
      <Image
        src={data.imageUrl}
        alt=""
        width={600}
        height={400}
        className="object-cover w-full transition-all duration-1000 group-hover:scale-110 aspect-[3/4]"
        onClick={() => handleClick(data.id)}
      />
      <div className="absolute inset-0 bg-black w-full h-full opacity-0 transition-opacity group-hover:opacity-70 duration-1000">
        <div className="h-full flex justify-center items-center">
          <h1 className="text-white text-3xl">{data.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
