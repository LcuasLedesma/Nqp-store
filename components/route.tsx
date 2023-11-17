'use client'

import { Category } from '@/type'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

interface RouteProps {
	categories: Category[]
}

const Route: React.FC<RouteProps> = ({ categories }) => {
	const params = useParams()
	const pathName = usePathname()
	const category = categories.find(
		(category) => category.id === params.categoryId
	)
	const categoryName = category?.name

	return (
		<div className='font-bold text-xl flex-col pt-10 space-y-4 hidden md:flex'>
			{categories.map((category) => (
				<Link
					key={category.id}
					href={`/category/${category.id}`}
					className={`${
						categoryName === category.name &&
						'animate-wiggle animate-once animate-ease-in-out bg-green-700 '
					} duration-300 hidden md:flex bg-black text-white justify-center hover:bg-orange-500 hover:scale-110`}>
					{category.name}
				</Link>
			))}
			<Link
				href={`/about`}
				className={`${
					pathName === '/about' &&
					' animate-wiggle animate-once animate-ease-in-out scale-105 bg-green-700'
				} duration-300 hidden md:flex bg-black text-white justify-center hover:bg-orange-500 hover:scale-110`}>
				Quienes somos
			</Link>
		</div>
	)
}

export default Route
