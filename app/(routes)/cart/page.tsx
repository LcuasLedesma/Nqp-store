import Wraper from '@/components/wraper'
import CartInfo from '@/app/(routes)/cart/components/cart-info'
import { Button } from '@/components/ui/Button'
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet'
import Summary from './components/summary'

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = () => {
	return (
		<Wraper>
			<div className='px-4 py-4 sm:px-6 lg:px-8'>
				{/* <Sheet>
					<SheetTrigger className='md:hidden w-full'>
						<Button variant={'ghost'} className='border'>
							Ver Mi carrito de compras
						</Button>
					</SheetTrigger>
					<SheetContent side={'left'}>
						<Summary />
					</SheetContent>
				</Sheet> */}
				<CartInfo />
			</div>
		</Wraper>
	)
}
export default CartPage
