'use client'

import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { Expand } from 'lucide-react'
import { useRouter } from 'next/navigation'
import IconButton from '@/components/ui/icon-button'
import usePreviewModal from '@/hooks/use-preview-modal'
import { Product } from '@/type'

interface ProductCard {
	data: Product
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
	const previewModal = usePreviewModal()
	const router = useRouter()

	const onPreview: MouseEventHandler = (event) => {
		event.stopPropagation()

		previewModal.onOpen(data)
	}

	return (
		<div className='group cursor-pointer w-full relative'>
			<div className='overflow-hidden'>
				<Image
					src={data.images?.[0]?.url}
					alt='Porduct Image'
					width={600}
					height={400}
					onClick={onPreview}
					className=' object-cover w-full transition-all duration-1000 hover:scale-110 aspect-[3/4] '
				/>
			</div>
			<div className='opacity-0 group-hover:opacity-100 transition absolute w-full bottom-5'>
				<IconButton
					onClick={onPreview}
					icon={
						<Expand size={20} className='text-gray-600' />
					}
				/>
			</div>
		</div>
	)
}

export default ProductCard
