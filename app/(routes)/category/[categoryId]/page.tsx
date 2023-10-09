import getProducts from "@/actions/get-products";
import getWorkshops from "@/actions/get-wokshops";
import ProductList from "@/components/product-list";
import SliderList from "@/components/slider-list";
import Wraper from "@/components/wraper";

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

  if (products && workshops) {
    console.log("Aaaaaaaaaa");
  }

  return (
    <Wraper>
      <div className="w-full" id="test2">
        {workshops.length === 0 ? (
          <ProductList items={products} />
        ) : (
          <div>
            <SliderList products={products} workshops={workshops} />
          </div>
        )}
      </div>
    </Wraper>
  );
};

export default CategoryPage;
