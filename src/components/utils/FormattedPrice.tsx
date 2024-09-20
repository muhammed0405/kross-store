/** @format */

import { Typography } from "@mui/material"

const formatNumberWithSpace = (num: number) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

interface FormattedPriceProps {
	price: number
}
const FormattedPrice: React.FC<FormattedPriceProps> = ({ price }) => {
	const formattedPrice = formatNumberWithSpace(price)
	return (
		<Typography variant="body2" fontWeight={700}>
			{formattedPrice} руб.
		</Typography>
	)
}

export default FormattedPrice
