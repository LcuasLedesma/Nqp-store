import CartInfo from '@/app/(routes)/cart/components/cart-info'
import { SheetCart } from './components/sheet-cart'

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = () => {
	return (
		<div className='px-4 py-4 sm:px-6 lg:px-8'>
			<SheetCart />
			<CartInfo />
		</div>
	)
}
export default CartPage
