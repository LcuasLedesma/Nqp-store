import getProducts from "@/actions/get-products";
import getWorkshops from "@/actions/get-wokshops";
import ProductList from "@/components/product-list";
import SliderList from "@/components/slider-list";

interface CategoryProps {
  params: { categoryId: string };
  searchParams: { sizeId: string };
}

const CategoryPage: React.FC<CategoryProps> = async ({ params }) => {
  const products = await getProducts({
    isFeatured: true,
    categoryId: params.categoryId,
  });

  const workshops = await getWorkshops({
    isFeatured: true,
    categoryId: params.categoryId,
  });

  return (
    <div className="w-full" id="test2">
      {workshops.length === 0 ? (
        <ProductList items={products} />
      ) : (
        <div>
          <SliderList products={products} workshops={workshops} />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
