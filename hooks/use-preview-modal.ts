import { ProductForSell } from '@/type'
import { create } from 'zustand'

interface PreviewModalStore {
	isOpen: boolean
	data?: ProductForSell
	onOpen: (data: ProductForSell) => void
	onClose: () => void
}

const usePrewiewModal = create<PreviewModalStore>(
	(set) => ({
		isOpen: false,
		data: undefined,
		onOpen: (data: ProductForSell) =>
			set({ data, isOpen: true }),
		onClose: () => set({ data: undefined, isOpen: false }),
	})
)

export default usePrewiewModal
