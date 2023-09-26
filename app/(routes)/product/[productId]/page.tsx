import getProduct from "@/actions/get-product";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  return (
    <div className="mx-auto max-w-7xl w-full h-full ">
      <div className="flex flex-col md:flex-row h-full w-full gap-8 px-4 sm:px-6 lg:px-8">
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 block md:hidden">
          <Info data={product} />
        </div>
        <Gallery images={product.images} />
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 hidden md:block">
          <Info data={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
