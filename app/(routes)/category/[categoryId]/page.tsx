import getProducts from '@/actions/get-products'
import ProductList from '@/components/product-list'
import Wraper from '@/components/wraper'

interface CategoryProps {
	params: { categoryId: string }
	searchParams: { sizeId: string }
}

const CategoryPage: React.FC<CategoryProps> = async ({
	params,
}) => {
	const products = await getProducts({
		isFeatured: true,
		categoryId: params.categoryId,
	})

	return (
		<Wraper>
			<div className='w-full'>
				<ProductList items={products} />
			</div>
		</Wraper>
	)
}

export default CategoryPage
