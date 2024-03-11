'use client'

import { Image as ImageType } from '@/type'
import Image from 'next/image'

interface GalleryProps {
	images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
	return (
		<picture className=' w-full relative'>
			{images.map((image) => (
				<Image
					key={image.id}
					src={image.url}
					alt='modal-image'
					width={600}
					height={400}
					className=' object-cover w-full aspect-square max-h-[900px] max-w-[600px]'
				/>
			))}
		</picture>
	)
}

export default Gallery
