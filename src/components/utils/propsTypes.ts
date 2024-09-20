/** @format */

import { IShoes } from "../../redux/types"

export interface IShoesCardProps {
	collectionId: string
	id: string
	image: string
	name: string
	price: number
}

export interface ICartProps {
	isOpen: boolean
	onClose: () => void
	items: IShoes[]
	onItemRemove: (id: string) => void
	onOrderPlaced: () => void
}

export interface ICartItemProps extends IShoes {
	onRemove: (id: string) => void
}
