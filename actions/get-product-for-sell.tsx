import { ProductForSell } from '@/type'
import axios from 'axios'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/productsForSell`

const getProductForSell = async (
	id: string
): Promise<ProductForSell> => {
	const res = await axios(`${URL}/${id}`)

	return res.data
}

export default getProductForSell
