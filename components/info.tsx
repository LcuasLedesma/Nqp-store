"use client";

import { Product } from "@/type";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div className="w-full justify-center items-center text-center mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Descripción</h2>
          <p className="mt-1 text-sm text-gray-500">{data.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Info;
