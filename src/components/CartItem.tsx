/** @format */

import {
	ListItem,
	Box,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
} from "@mui/material"
import FormattedPrice from "./utils/FormattedPrice"
import CloseIcon from "@mui/icons-material/Close"
import { ICartItemProps } from "./utils/propsTypes"

export const CartItem: React.FC<ICartItemProps> = ({
	image,
	name,
	price,
	collectionId,
	id,
	onRemove,
}) => (
	<ListItem
		sx={{
			border: "1px solid #d3d3d3",
			borderRadius: "10px",
			display: "flex",
			alignItems: "end",
		}}
	>
		<Box
			component="img"
			src={`${
				import.meta.env.VITE_PB_URL
			}/api/files/${collectionId}/${id}/${image}`}
			alt={name}
			sx={{ width: 70, height: 70, marginRight: 2 }}
		/>
		<ListItemText primary={name} secondary={<FormattedPrice price={price} />} />
		<ListItemSecondaryAction>
			<IconButton
				sx={{
					border: "1px solid #d3d3d3",
					borderRadius: "10px",
					maxWidth: 32,
					minWidth: 32,
					maxHeight: 32,
					minHeight: 32,
				}}
				edge="end"
				aria-label="delete"
				onClick={() => onRemove(id)}
			>
				<CloseIcon
					sx={{
						color: "#d3d3d3",
						maxWidth: 11,
						minWidth: 11,
						maxHeight: 11,
						minHeight: 11,
					}}
				/>
			</IconButton>
		</ListItemSecondaryAction>
	</ListItem>
)
