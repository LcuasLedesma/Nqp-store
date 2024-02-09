'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
	postalCode: z.string().min(4, {
		message: 'ingrese un codigo postal valido',
	}),
})

const ShipmentForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			postalCode: '',
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-8'>
				<FormField
					control={form.control}
					name='postalCode'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-lg'>
								Codigo Postal
							</FormLabel>
							<FormDescription className='informativeText'>
								Ingresa tu codigo postal para calcular el
								costo del envío
							</FormDescription>
							<FormControl>
								<div className='flex gap-x-2'>
									<Input
										className='informativeText'
										placeholder='Codigo Postal'
										maxLength={4}
										{...field}
									/>
									<Button type='submit'>Buscar</Button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	)
}

export default ShipmentForm
