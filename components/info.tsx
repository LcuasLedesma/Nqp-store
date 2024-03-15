import { ProductForSell } from '@/type'
import Currency from './ui/currency'
import { Button } from './ui/Button'
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'

interface InfoProps {
	data: ProductForSell
}

const Info: React.FC<InfoProps> = ({ data }) => {
	return (
		<div className='w-full mx-auto text-center'>
			{data.price ? (
				<h1 className='text-3xl font-bold text-gray-900 mb-4'>
					{data.name}
				</h1>
			) : (
				<h1 className='text-3xl font-bold text-gray-900 mb-4'>
					{data.category.name}
				</h1>
			)}

			<hr className='my-4' />
			<div className='flex flex-col gap-y-6 informativeText'>
				<p className='text-md text-gray-500'>
					{data.description}
				</p>
				{data.weight && (
					<div className='flex flex-col'>
						<div className='flex justify-center text-sm gap-4 pb-4'>
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
						<span className='text-sm'>
							Envio a cargo del comprador
						</span>
						<span className='text-sm'>
							(3300) Posadas Misiones Argentina
						</span>
					</div>
				)}
				{data.price && (
					<div className='flex items-center justify-center flex-col gap-4'>
						<div className='text-sm justify-between text-gray-900 mb-2 flex gap-8 items-center text-center'>
							<Currency price={data?.price} />
							<Button
								asChild
								className='transition-transform gap-4 duration-500 hover:opacity-100 hover:scale-110'>
								<Link
									href={'https://wa.me/3764653566, text:'}>
									<BsWhatsapp className='w-5 h-5' />
									Enviar mensaje
								</Link>
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Info
