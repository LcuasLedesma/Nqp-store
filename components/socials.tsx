import Link from 'next/link'
import {
	Facebook,
	Instagram,
	LucideIcon,
	Mail,
} from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'

const UrlLink = ({
	url,
	Icon,
}: {
	url: string
	Icon: LucideIcon
}) => {
	return (
		<Link href={url} className='flex gap-2 items-center'>
			<Icon className='text-black' width={20} height={20} />
		</Link>
	)
}

const Socials = () => {
	return (
		<div className='flex flex-wrap gap-4'>
			<UrlLink
				url='https://www.instagram.com/nqp_nadaqueperder/'
				Icon={Instagram}
			/>
			<UrlLink
				url='mailto:lilinadaqueperder@gmail.com'
				Icon={Mail}
			/>
			<UrlLink
				url='https://www.facebook.com/nadaqueperder.recicla'
				Icon={Facebook}
			/>
			<Link
				href={'https://wa.me/3764653566'}
				className='flex gap-2 items-center'>
				<BsWhatsapp
					className='text-black'
					width={40}
					height={40}
				/>
			</Link>
		</div>
	)
}

export default Socials
