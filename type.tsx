export interface Category {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  isFeatured: boolean;
  description: string;
  images: Image[];
}

export interface Workshop {
  id: string;
  category: Category;
  name: string;
  isFeatured: boolean;
  description: string;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}
