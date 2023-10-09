import getCategories from "@/actions/get-categories";
import Category from "@/components/category";
import Wraper from "@/components/wraper";

export const revalidate = 0;

const HomePage = async () => {
  const categories = await getCategories();

  return (
    <Wraper>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {categories.map((category) => (
          <Category data={category} key={category.id} />
        ))}
      </div>
    </Wraper>
  );
};

export default HomePage;
