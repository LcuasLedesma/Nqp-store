import getProducts from '@/actions/get-products'
import getProductsForSell from '@/actions/get-products-for-sell'
import ProductForSellList from '@/components/product-for-sell-list'
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

	const productsForSell = await getProductsForSell({
		isFeatured: true,
		categoryId: params.categoryId,
	})

	return (
		<Wraper>
			<div className='w-full'>
				{productsForSell.length > 0 ? (
					<ProductForSellList items={productsForSell} />
				) : (
					<ProductList items={products} />
				)}
			</div>
		</Wraper>
	)
}

export default CategoryPage
