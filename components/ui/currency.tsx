'use client'

import { useEffect, useState } from 'react'

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
})

interface CurrencyProps {
	price: string | number
}

const Currency: React.FC<CurrencyProps> = ({ price }) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	return (
		<div className='text-[1.3rem] text-gray-500 font-[550]'>
			{formatter.format(Number(price))}
		</div>
	)
}

export default Currency
