import Image from 'next/image'
import Link from 'next/link'
import aboutImage from '../public/about/nosotros.jpg'

const AboutUs = () => {
	return (
		<div className='cursor-pointer w-full overflow-hidden relative group'>
			<Image
				src={aboutImage}
				alt=''
				width={600}
				height={400}
				className='object-cover w-full transition-all duration-1000 group-hover:scale-110 aspect-[3/4]'
			/>
			<Link
				href={'/about'}
				className='absolute inset-0 bg-black w-full h-full opacity-0 transition-opacity group-hover:opacity-70 duration-1000'>
				<div className='h-full flex justify-center items-center'>
					<h1 className='text-white text-3xl'>
						Quienes Somos
					</h1>
				</div>
			</Link>
		</div>
	)
}

export default AboutUs
