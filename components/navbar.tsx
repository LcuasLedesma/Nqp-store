import Link from 'next/link'
import logo from '../public/logo/logo.png'
import Image from 'next/image'
import getCategories from '@/actions/get-categories'
import Route from './route'
import MobileMenu from './ui/mobile-menu'

export const revalidate = 0

const Navbar = async () => {
	const categories = await getCategories()

	if (categories.length === 0) {
		return
	}

	return (
		<div className='mx-auto justify-center top-0 left-0 z-50 md:ml-10 md:mt-10 md:fixed w-[175px] '>
			<div className='flex-col'>
				<Link href='/home'>
					<Image
						src={logo}
						alt='logo'
						width={200}
						height={200}
						className='object-cover items-center justify-center cursor-pointer '
					/>
				</Link>

				<Route categories={categories} />

				<MobileMenu categories={categories} />
			</div>
		</div>
	)
}

export default Navbar
