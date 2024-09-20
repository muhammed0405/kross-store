/** @format */

import axios from "axios"
import { actionTypes } from "./actionTypes"
import { Dispatch } from "redux"
import { IShoes } from "./types"

export const getShoes = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch({ type: actionTypes.GET_SHOES })
			const response = await axios.get(
				`${import.meta.env.VITE_PB_URL}/api/collections/shoes/records/`
			)
			dispatch({
				type: actionTypes.GET_SHOES_SUCCESS,
				payload: response.data.items,
			})
		} catch (error: any) {
			dispatch({ type: actionTypes.GET_SHOES_ERROR, payload: error.message })
		}
	}
}

export const addToCart = (shoe: IShoes) => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.ADD_TO_CART_SUCCESS,
			payload: shoe,
		})
	}
}

export const removeFromCart = (id: string) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: id,
	}
}

export const clearCart = () => {
	return {
		type: actionTypes.CLEAR_CART,
	}
}

export const addToLiked = (shoe: IShoes) => {
	return (dispatch: Dispatch) => {
		dispatch({
			type: actionTypes.ADD_TO_LIKED_SUCCESS,
			payload: shoe,
		})
	}
}
