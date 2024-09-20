/** @format */

import React from "react"
import {
	Typography,
	Drawer,
	List,
	Divider,
	Button,
	Box,
	IconButton,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FormattedPrice from "./utils/FormattedPrice"
import BoxImage from "../assets/img/box.png"
import { CartItem } from "./CartItem"
import { ICartProps } from "./utils/propsTypes"

const Cart: React.FC<ICartProps> = ({
	isOpen,
	onClose,
	items,
	onItemRemove,
	onOrderPlaced,
}) => {
	const total = items.reduce((sum, item) => sum + item.price, 0)
	const tax = total * 0.05

	const handlePlaceOrder = () => {
		onOrderPlaced()
	}

	return (
		<Drawer
			anchor="right"
			open={isOpen}
			onClose={onClose}
			sx={{
				"& .MuiDrawer-paper": {
					width: { xs: "100%", sm: 380 },
					padding: 3,
					paddingBottom: 20,
				},
			}}
		>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				mb={2}
			>
				<Typography variant="h6">Корзина</Typography>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</Box>
			{items.length === 0 ? (
				<Box
					sx={{
						position: "absolute",
						top: "30%",
						left: "20%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 2,
						maxWidth: "245px",
					}}
				>
					<Box
						component={"img"}
						src={BoxImage}
						sx={{ width: "100%", maxWidth: "120px" }}
					/>
					<Typography variant="h5" sx={{ textAlign: "center" }}>
						Корзина пустая
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{ textAlign: "center", fontSize: "14px" }}
					>
						Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
					</Typography>
					<Button
						variant="contained"
						sx={{
							mt: 2,
							width: "100%",
							backgroundColor: "#8DD64A",
							color: "white",
							"&:hover": {
								backgroundColor: "#7CC43A",
							},
							borderRadius: "18px",
							height: "55px",
						}}
						onClick={onClose}
					>
						← Вернутся Назад
					</Button>
				</Box>
			) : (
				<>
					<List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
						{items.map(item => (
							<CartItem key={item.id} {...item} onRemove={onItemRemove} />
						))}
					</List>
					<Box
						position={"fixed"}
						bottom={0}
						maxWidth={"350px"}
						p={3}
						width={"100%"}
						bgcolor={"white"}
					>
						<Divider />
						<Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
							Итого: <FormattedPrice price={total} />
						</Typography>
						<Typography variant="body2">
							Налог 5%: <FormattedPrice price={Number(tax.toFixed(0))} />
						</Typography>
						<Button
							variant="contained"
							sx={{
								mt: 2,
								width: "100%",
								backgroundColor: "#8DD64A",
								color: "white",
								"&:hover": {
									backgroundColor: "#7CC43A",
								},
								borderRadius: "1px",
							}}
							onClick={handlePlaceOrder}
						>
							Оформить заказ →
						</Button>
					</Box>
				</>
			)}
		</Drawer>
	)
}

export default Cart
