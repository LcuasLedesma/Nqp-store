'use client'

import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { X } from 'lucide-react'

import IconButton from '@/components/ui/icon-button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import { ProductForSell } from '@/type'
import { Button } from '@/components/ui/Button'

interface CartItemProps {
	data: ProductForSell
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
	const cart = useCart()

	const onRemove = () => {
		cart.removeItem(data.id)
	}
	return (
		<li className='flex py-2'>
			<div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-24 sm:w-24'>
				<Image
					fill
					src={data.images[0].url}
					alt=''
					className='object-cover object-center'
				/>
			</div>
			<div className='relative flex flex-1 flex-col ml-4 justify-between sm:ml-6'>
				<div className='absolute z-10 right-0 top-0'>
					<Button
						onClick={onRemove}
						variant={'ghost'}
						className='border rounded-full h-6 w-6 p-0'>
						<X size={12} />
					</Button>
				</div>
				<div className='relative pr-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sn:pr-0 items-center'>
					<div className='flex flex-col justify-between'>
						<p className='text-black text-lg font-semibold'>
							{data.name}
						</p>
						<Currency price={data.price} />
					</div>
				</div>
			</div>
		</li>
	)
}
export default CartItem
