/** @format */

import { actionTypes } from "./actionTypes"

export interface IShoes {
	collectionId: string
	collectionName?: string
	id: string
	name: string
	image: string
	price: number
	created?: string
	updated?: string
}

export interface IInitialStateShoes {
	shoes: IShoes[]
	loading: boolean
	error: string | null
	cart: IShoes[]
	liked: IShoes[]
}

interface IGetShoes {
	type: typeof actionTypes.GET_SHOES
}

interface IGetShoesSuccess {
	type: typeof actionTypes.GET_SHOES_SUCCESS
	payload: IShoes[]
}
interface IRemoveFromCart {
	type: typeof actionTypes.REMOVE_FROM_CART
	payload: string
}

interface IClearCart {
	type: typeof actionTypes.CLEAR_CART
}

interface IGetShoesError {
	type: typeof actionTypes.GET_SHOES_ERROR
	payload: string
}

interface IAddToCart {
	type: typeof actionTypes.ADD_TO_CART_SUCCESS
	payload: IShoes
}

interface IAddToCartError {
	type: typeof actionTypes.ADD_TO_CART_ERROR
	payload: string
}

interface IAddToLiked {
	type: typeof actionTypes.ADD_TO_LIKED_SUCCESS
	payload: IShoes
}

interface IAddToLikedError {
	type: typeof actionTypes.ADD_TO_LIKED_ERROR
	payload: string
}

export type IActions =
	| IGetShoes
	| IGetShoesSuccess
	| IGetShoesError
	| IAddToCart
	| IAddToCartError
	| IAddToLiked
	| IAddToLikedError
	| IRemoveFromCart
	| IClearCart
