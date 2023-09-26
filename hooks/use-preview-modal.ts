import { Product, Workshop } from "@/type";
import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product | Workshop) => void;
  onClose: () => void;
}

const usePrewiewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () => set({ data: undefined, isOpen: false }),
}));

export default usePrewiewModal;
