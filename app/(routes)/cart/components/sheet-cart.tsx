import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet'
import Summary from './summary'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/Button'

export function SheetCart() {
	return (
		<Sheet>
			<SheetTrigger
				className={cn(
					buttonVariants({ className: '' }),
					'md:hidden w-full  informativeText '
				)}>
				<span className='text-white'>
					Ver Mi carrito de compras
				</span>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<Summary />
			</SheetContent>
		</Sheet>
	)
}
