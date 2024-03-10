import { Product } from '@/type'
import NoResults from './ui/no-results'
import ProductCard from './ui/product-card'

interface ProductListProps {
	items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
	items,
}) => {
	return (
		<div className='text-center flex-col'>
			{items.length === 0 && <NoResults />}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full h-full '>
				{items.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
		</div>
	)
}

export default ProductList
