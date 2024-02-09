export interface Category {
	id: string
	name: string
	imageUrl: string
}

export interface Product {
	id: string
	category: Category
	name: string
	isFeatured: boolean
	description: string
	images: Image[]
}

export interface ProductForSell {
	id: string
	category: Category
	name: string
	isFeatured: boolean
	description: string
	images: Image[]
	price: string
	weight: number
	length: number
	height: number
	width: number
}

export interface Image {
	id: string
	url: string
}
