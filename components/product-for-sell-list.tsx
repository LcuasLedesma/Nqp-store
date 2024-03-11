import { ProductForSell } from '@/type'
import NoResults from './ui/no-results'
import ProductForSellCard from './product-for-sell-card'

interface ProductListProps {
	items: ProductForSell[]
}

const ProductForSellList: React.FC<ProductListProps> = ({
	items,
}) => {
	return (
		<div className='text-center flex-col'>
			{items.length === 0 && <NoResults />}
			<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 w-full h-full '>
				{items.map((item) => (
					<ProductForSellCard key={item.id} data={item} />
				))}
			</div>
		</div>
	)
}

export default ProductForSellList
