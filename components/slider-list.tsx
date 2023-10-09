import { Product, Workshop } from "@/type";
import Slider from "./ui/slider";
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
    <div className="">
      <div className={`flex-col gap-14 w-full hidden md:flex`}>
        <Slider images={imagesForProducts} title="Productos" data={products} />
        <Slider images={imagesForWorkshops} title="Talleres" data={workshops} />
      </div>

      <div className={`flex-col gap-14 w-full flex md:hidden`}>
        <MobileSlider images={imagesForProducts} title="Productos" />
        <MobileSlider images={imagesForWorkshops} title="Talleres" />
      </div>
    </div>
  );
};

export default SliderList;
