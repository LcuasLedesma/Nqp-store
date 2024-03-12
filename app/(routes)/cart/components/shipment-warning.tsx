import Socials from '@/components/socials'

export default function ShipmentWarning() {
	return (
		<section className='informativeText flex flex-col gap-6'>
			<h1 className='font-semibold text-lg text-black'>
				¡IMPORTANTE!
			</h1>
			<p>
				El costo del envío de su producto queda a cargo del
				comprador. Para conocer el valor exacto, les pedimos
				que se pongan en contacto directamente con el
				vendedor a través de alguno de los siguientes medios
				de comunicación:
			</p>
			<Socials />
		</section>
	)
}
