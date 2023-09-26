import { Category } from "@/type";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await axios(URL);

  return res.data;
};

export default getCategories;
