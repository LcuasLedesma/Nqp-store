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
    <div className="cursor-pointer w-full overflow-hidden">
      <Image
        src={data.imageUrl}
        alt=""
        width={600}
        height={400}
        className=" object-cover w-full transition-all duration-1000 hover:scale-110 aspect-[3/4] "
        onClick={() => handleClick(data.id)}
      />
    </div>
  );
};

export default Category;
