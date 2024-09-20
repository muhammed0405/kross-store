/** @format */

import { actionTypes } from "./actionTypes"
import { IActions, IInitialStateShoes, IShoes } from "./types"

const initialState: IInitialStateShoes = {
	shoes: [],
	loading: false,
	error: null,
	cart: [],
	liked: [],
}

export const shoesReducer = (
	state = initialState,
	action: IActions
): IInitialStateShoes => {
	switch (action.type) {
		case actionTypes.GET_SHOES:
			return {
				...state,
				loading: true,
			}

		case actionTypes.GET_SHOES_SUCCESS:
			return {
				...state,
				shoes: action.payload,
				loading: false,
			}

		case actionTypes.GET_SHOES_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}

		case actionTypes.ADD_TO_CART_SUCCESS:
			return {
				...state,
				cart: [...state.cart, action.payload],
			}

		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload),
			}

		case actionTypes.CLEAR_CART:
			return {
				...state,
				cart: [],
			}

		case actionTypes.ADD_TO_LIKED_SUCCESS:
			const isLiked = state.liked.some(item => item.id === action.payload.id)
			if (isLiked) {
				return {
					...state,
					liked: state.liked.filter(item => item.id !== action.payload.id),
				}
			} else {
				return {
					...state,
					liked: [...state.liked, action.payload],
				}
			}

		default:
			return state
	}
}
