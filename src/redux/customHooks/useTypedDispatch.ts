/** @format */

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as IUserActions from "../actionCreator"
export const useTypedDispatch = () => {
	const dispatch = useDispatch()
	return bindActionCreators({ ...IUserActions }, dispatch)
}
