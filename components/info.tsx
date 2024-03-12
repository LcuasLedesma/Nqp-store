import { ProductForSell } from '@/type'
import Currency from './ui/currency'
import { ShoppingCart } from 'lucide-react'
import { MouseEventHandler } from 'react'
import useCart from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'
import { Button } from './ui/Button'
import usePreviewModal from '@/hooks/use-preview-modal'

interface InfoProps {
	data: ProductForSell
}

const Info: React.FC<InfoProps> = ({ data }) => {
	const cart = useCart()
	const router = useRouter()
	const previewModal = usePreviewModal()

	const onAddToCart: MouseEventHandler<
		HTMLButtonElement
	> = (event) => {
		event.stopPropagation()

		cart.addItem(data)
	}

	const onClick = () => {
		previewModal.onClose()
		router.push('/cart')
	}

	return (
		<div className='w-full mx-auto text-center'>
			<h1 className='text-3xl font-bold text-gray-900 mb-4'>
				{data.category.name}
			</h1>
			<hr className='my-4' />
			<div className='flex flex-col gap-y-6 informativeText'>
				<p className='text-xl text-gray-500'>
					{data.description}
				</p>
				{data.weight && (
					<div className='flex justify-center text-sm gap-4'>
						<span>
							<strong>peso: </strong>
							{data.weight / 1000} kg
						</span>
						<span>
							<strong>ancho: </strong>
							{data.width} cm
						</span>
						<span>
							<strong>alto: </strong>
							{data.height} cm
						</span>
					</div>
				)}
				{data.price && (
					<div className='flex items-center justify-center flex-col gap-4'>
						{cart.items.some(
							(item) => item.id === data.id
						) ? (
							<Button
								onClick={onClick}
								className='flex w-36'>
								Ir al carrito <ShoppingCart />
							</Button>
						) : (
							<div className='text-3xl justify-between text-gray-900 mb-2 flex gap-8 items-center text-center'>
								<Currency price={data?.price} />
								<Button
									onClick={onAddToCart}
									className='transition-transform duration-500 hover:opacity-100 hover:scale-110'>
									Agregar al carrito
									<ShoppingCart className='w-5 h-5' />
								</Button>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default Info
