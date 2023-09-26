import { Workshop } from "@/type";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/workshops`;

const getWorkshop = async (id: string): Promise<Workshop> => {
  const res = await axios(`${URL}/${id}`);

  return res.data;
};

export default getWorkshop;
