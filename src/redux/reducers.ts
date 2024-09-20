/** @format */

import { combineReducers } from "redux"
import { shoesReducer } from "./shoesReducer"
export const rootReducer = combineReducers({
	shoesReducer: shoesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
