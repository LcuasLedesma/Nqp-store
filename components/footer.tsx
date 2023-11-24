import Link from 'next/link'
import Image from 'next/image'
import instagram from '../public/svg/instagram.svg'
import facebook from '../public/svg/facebook.svg'
import mail from '../public/svg/mail.svg'

export default function Footer() {
	const UrlLink = ({
		url,
		label,
		src,
	}: {
		url: string
		label: string
		src: string
	}) => {
		return (
			<li>
				<Link
					href={url}
					className='flex gap-2 items-center informativeText'>
					<Image
						src={src}
						alt={url}
						width={20}
						height={20}
					/>
					{label}
				</Link>
			</li>
		)
	}

	return (
		<footer className='border-t flex justify-center items-center'>
			<ul className='mx-auto py-10 gap-4 grid grid-cols-3'>
				<UrlLink
					url='https://www.instagram.com/nadaqueperderrecicla'
					label='Instagram'
					src={instagram}
				/>
				<UrlLink
					url='https://www.facebook.com/nadaqueperder.recicla'
					label='Facebook'
					src={facebook}
				/>
				<UrlLink
					url='mailto:lilinadaqueperder@gmail.com'
					label='Correo'
					src={mail}
				/>
			</ul>
		</footer>
	)
}
