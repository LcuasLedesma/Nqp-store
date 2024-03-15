'use client'

import usePreviewModal from '@/hooks/use-preview-modal'
import Gallery from '@/components/gallery'
import Info from '@/components/info'
import Modal from '@/components/ui/modal'
import { ProductForSell } from '@/type'

const PreviewModal = () => {
	const previewModal = usePreviewModal()
	const product = usePreviewModal((state) => state.data)

	if (!product) {
		return null
	}

	return (
		<Modal
			open={previewModal.isOpen}
			onClose={previewModal.onClose}>
			<div className='flex flex-col gap-4'>
				<div className='px-10'>
					<Gallery images={product.images} />
				</div>
				<div className=''>
					<Info data={product as ProductForSell} />
				</div>
			</div>
		</Modal>
	)
}

export default PreviewModal
