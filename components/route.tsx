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

	if (!Array.isArray(categories)) {
		return null
	}

	return (
		<div className='font-bold text-xl flex-col pt-10 space-y-4 hidden md:flex'>
			{categories.map((category) => (
				<Link
					key={category.id}
					href={`/category/${category.id}`}
					className={`${
						params.categoryId === category.id &&
						' bg-green-700 animate-wiggle-test'
					} duration-300 hidden md:flex bg-black text-white justify-center text-center hover:bg-orange-500 hover:scale-110`}>
					{category.name}
				</Link>
			))}
			<Link
				href={`/about`}
				className={`${
					pathName === '/about' &&
					' bg-green-700 animate-wiggle-test'
				} duration-300  hidden md:flex bg-black text-white justify-center text-center hover:bg-orange-500 hover:scale-110`}>
				Quienes somos
			</Link>
		</div>
	)
}

export default Route
