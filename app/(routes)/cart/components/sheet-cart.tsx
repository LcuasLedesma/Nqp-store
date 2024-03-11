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
					buttonVariants({ variant: 'ghost' }),
					'md:hidden w-full'
				)}>
				Ver Mi carrito de compras
			</SheetTrigger>
			<SheetContent side={'left'}>
				<Summary />
			</SheetContent>
		</Sheet>
	)
}
