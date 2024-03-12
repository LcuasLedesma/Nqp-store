import Summary from '@/app/(routes)/cart/components/summary'
import ShipmentWarning from './shipment-warning'

const CartInfo = () => {
	return (
		<div className='pt-12 lg:grid lg:grid-cols-2 lg:items-start gap-x-12'>
			<section>
				<h1 className='text-3xl border-b mb-10'>Envío</h1>
				<ShipmentWarning />
			</section>
			<section className='hidden md:block'>
				<Summary />
			</section>
		</div>
	)
}

export default CartInfo
