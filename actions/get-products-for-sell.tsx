import { ProductForSell } from '@/type'
import qs from 'query-string'
import axios from 'axios'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/productsForSell`

interface Query {
	categoryId?: string
	isFeatured?: boolean
}

const getProductsForSell = async (
	query: Query
): Promise<ProductForSell[]> => {
	const url = qs.stringifyUrl({
		url: URL,
		query: {
			categoryId: query.categoryId,
			isFeatured: query.isFeatured,
		},
	})

	const res = await axios(url)
	const data = await res.data

	return data
}

export default getProductsForSell
