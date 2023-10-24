import { Product, Workshop } from "@/type";
import SliderImages from "./ui/slider";
import MobileSlider from "./ui/mobile-slider";

interface SliderListProps {
  products: Product[];
  workshops: Workshop[];
}

const SliderList: React.FC<SliderListProps> = ({ products, workshops }) => {
  const imagesForProducts = products
    .flatMap((product) => product.images)
    .map((image) => image.url);

  const imagesForWorkshops = workshops
    .flatMap((Workshop) => Workshop.images)
    .map((image) => image.url);

  return (
    <div>
      <div
        className={`flex-col w-full mx-auto max-w-7xl gap-14 hidden xl:flex`}
      >
        <SliderImages
          images={imagesForProducts}
          title="Productos"
          data={products}
        />
        <SliderImages
          images={imagesForWorkshops}
          title="Talleres"
          data={workshops}
        />
      </div>

      <div className={`flex-col gap-14 w-full flex xl:hidden`}>
        <MobileSlider images={imagesForProducts} title="Productos" />
        <MobileSlider images={imagesForWorkshops} title="Talleres" />
      </div>
    </div>
  );
};

export default SliderList;
