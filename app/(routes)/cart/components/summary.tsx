'use client'

import axios from 'axios'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import { toast } from 'react-hot-toast'
import { Button } from '@/components/ui/Button'
import { Loader2, LoaderIcon } from 'lucide-react'
import CartItem from './cart-item'

interface SummaryProps {}

const Summary: React.FC<SummaryProps> = () => {
	const cart = useCart()
	const [loading, setLoading] = useState(false)
	const searchParams = useSearchParams()
	const items = useCart((state) => state.items)
	const removeAll = useCart((state) => state.removeAll)

	useEffect(() => {
		if (searchParams.get('success')) {
			toast.success('Payment Completed.')
			removeAll()
		}

		if (searchParams.get('canceled')) {
			toast.error('something went wrong.')
		}
	}, [searchParams, removeAll])

	const totalPrice = items.reduce((total, item) => {
		return total + Number(item.price)
	}, 0)

	const onCheckout = async () => {
		try {
			setLoading(true)
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_API_URL}/orders`,
				{ productIds: items.map((item) => item.id) }
			)
			window.location = data.url
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='mt-16 rounded-lg md:bg-[#fbfbfb] px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
			<h2 className='text-lg font-medium text-gray-900'>
				Resumen de compra
			</h2>
			<div className='lg:col-span-7'>
				{cart.items.length === 0 && (
					<p className='text-neutral-500'>
						No items added to Cart
					</p>
				)}
				<ul>
					{cart.items.map((item) => (
						<CartItem key={item.id} data={item} />
					))}
				</ul>
			</div>
			<div className='mt-6 space-y-4'>
				<div className='flex items-center justify-between border-t border-gray-200 pt-4'>
					<div className='text-base font-medium text-gray-900'>
						Total de la compra
					</div>
					<Currency price={totalPrice} />
				</div>
			</div>
			{/* <Button onClick={onCheckout} className='w-full mt-6'>
				{loading ? (
					<Loader2 className='animate-spin animate-infinite animate-ease-out' />
				) : (
					<p>Comprar</p>
				)}
			</Button> */}
		</div>
	)
}
export default Summary
