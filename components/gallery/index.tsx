'use client'

import { Image as ImageType } from '@/type'
import Image from 'next/image'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel-shadcn'

interface GalleryProps {
	images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
	return (
		<picture className='w-full relative'>
			<Carousel draggable>
				<CarouselContent>
					{images.map((image) => (
						<CarouselItem
							className='aspect-auto'
							key={image.id}>
							<Image
								key={image.id}
								src={image.url}
								alt='modal-image'
								width={600}
								height={400}
								className='object-cover w-full aspect-[9/16]'
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</picture>
	)
}

export default Gallery
