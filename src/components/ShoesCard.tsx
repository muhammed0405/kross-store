/** @format */

import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from "@mui/material"
import { Add, FavoriteBorderOutlined } from "@mui/icons-material"
import { IShoesCardProps } from "./utils/propsTypes"
import FormattedPrice from "./utils/FormattedPrice"
import FavoriteIcon from "@mui/icons-material/Favorite"
import DoneIcon from "@mui/icons-material/Done"
import { useTypedDispatch } from "../redux/customHooks/useTypedDispatch"
import { useTypedSelector } from "../redux/customHooks/useTypedSelector"

export default function ShoesCard({
	image,
	name,
	price,
	id,
	collectionId,
}: IShoesCardProps) {
	const { addToCart, removeFromCart, addToLiked } = useTypedDispatch()
	const { cart, liked } = useTypedSelector(state => state.shoesReducer)

	const isInCart = cart.some(item => item.id === id)
	const isLiked = liked.some(item => item.id === id)

	const handleLikeClick = () => {
		addToLiked({ id, collectionId, name, image, price })
	}

	const handleCartClick = () => {
		if (isInCart) {
			removeFromCart(id)
		} else {
			addToCart({ id, collectionId, name, image, price })
		}
	}

	return (
		<Card
			elevation={0}
			variant="outlined"
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				borderRadius: 5,
				position: "relative",
				overflow: "visible",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					left: 8,
					top: 8,
					zIndex: 1,
					border: isLiked ? "none" : "1px solid #d3d3d3",
					borderRadius: "10px",
					minWidth: 30,
					minHeight: 30,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: isLiked ? "#fef0f0" : "transparent",
				}}
			>
				<IconButton
					aria-label="favorite"
					sx={{
						color: "#d3d3d3",
						borderRadius: "8px",
					}}
					onClick={handleLikeClick}
				>
					{isLiked ? (
						<FavoriteIcon
							sx={{ color: "red", maxWidth: "20px", maxHeight: "20px" }}
						/>
					) : (
						<FavoriteBorderOutlined
							sx={{ maxWidth: "20px", maxHeight: "20px" }}
						/>
					)}
				</IconButton>
			</Box>

			<CardMedia
				component="img"
				image={`${
					import.meta.env.VITE_PB_URL
				}/api/files/${collectionId}/${id}/${image}`}
				alt={name}
				sx={{
					pt: 5,
					px: 2,
					objectFit: "contain",
					height: 160,
				}}
			/>

			<CardContent
				sx={{
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Typography variant="body2" sx={{ mb: 2 }}>
					{name}
				</Typography>

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							display: { xs: "flex", md: "block" },
							gap: "10px",
							alignItems: "center",
						}}
					>
						<Typography variant="caption" color="text.secondary">
							ЦЕНА:
						</Typography>
						<FormattedPrice price={price} />
					</Box>
					<Button
						variant="outlined"
						sx={{
							minWidth: 32,
							minHeight: 32,
							p: 0,
							borderRadius: "8px",
							border: isInCart ? "none" : "1px solid #d3d3d3",
							background: isInCart ? "#7abe87" : "transparent",
						}}
						onClick={handleCartClick}
					>
						{isInCart ? (
							<DoneIcon sx={{ color: "#FFF" }} />
						) : (
							<Add sx={{ color: "#d3d3d3" }} />
						)}
					</Button>
				</Box>
			</CardContent>
		</Card>
	)
}
