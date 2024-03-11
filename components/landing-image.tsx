import Image from 'next/image'
import landingImg from '@/public/landing/landing.jpg'
import landingLogo from '@/public/landing/logo blanco.png'
import text from '@/public/landing/TEXTO.png'
import reciclaje from '@/public/landing/verde recicla.png'
import Link from 'next/link'

const LandingImage = () => {
	return (
		<div className='hidden md:flex md:flex-row w-full h-[100vh]'>
			<div className='md:w-2/3 md:h-full h-[60vh] order-2 md:order-1'>
				<Image
					src={landingImg}
					alt='landing'
					priority
					width={600}
					height={600}
					className='object-cover h-full w-full'
				/>
			</div>
			<div className='flex flex-col p-10 gap-6 py-60 order-2 w-1/3 h-full bg-black items-center'>
				<Link href={'/home'} className='cursor-pointer '>
					<Image
						className='object-contain h-auto w-auto hover:scale-110 transition duration-500 ease-in-out'
						src={landingLogo}
						priority
						alt='landingLogo'
						width={300}
						height={300}
					/>
				</Link>
				<Image
					src={reciclaje}
					height={50}
					width={50}
					priority
					alt='landing-reciclaje'
					className='object-contain h-auto w-auto'
				/>
				<Image
					src={text}
					height={200}
					width={200}
					priority
					alt='landing-text'
					className='object-contain h-auto w-auto'
				/>
			</div>
		</div>
	)
}

export default LandingImage
