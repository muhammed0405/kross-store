/** @format */

import React, { useState } from "react"
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Badge,
	Box,
	useMediaQuery,
	useTheme,
	Menu,
	MenuItem,
} from "@mui/material"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import Cart from "./Cart"
import Logo from "../assets/img/Logo.svg"
import FormattedPrice from "./utils/FormattedPrice"
import { useTypedSelector } from "../redux/customHooks/useTypedSelector"
import { useTypedDispatch } from "../redux/customHooks/useTypedDispatch"

const Header: React.FC = () => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

	const { removeFromCart, clearCart } = useTypedDispatch()
	const cartItems = useTypedSelector(state => state.shoesReducer.cart)

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen)
	}

	const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	const handleRemoveItem = (id: string) => {
		removeFromCart(id)
	}

	const handleOrderPlaced = () => {
		clearCart()
	}

	const totalSum = cartItems.reduce((sum, item) => sum + item.price, 0)

	return (
		<>
			<AppBar
				position="static"
				sx={{ backgroundColor: "white", color: "black" }}
				elevation={0}
			>
				<Toolbar
					sx={{
						justifyContent: "space-between",
						alignItems: "center",
						height: "128px",
					}}
				>
					<Box display="flex" alignItems="center">
						<Box
							component="img"
							src={Logo}
							alt="KROSS STORE"
							sx={{ height: 40, marginRight: 2 }}
						/>
						{!isMobile && (
							<Box>
								<Typography variant="h6" component="h1" fontWeight={700}>
									KROSS STORE
								</Typography>
								<Typography variant="caption" component="p" fontSize={14}>
									Магазин лучших кроссовок
								</Typography>
							</Box>
						)}
					</Box>
					<Box display="flex" alignItems="center">
						{isMobile ? (
							<IconButton color="inherit" onClick={handleMenuOpen}>
								<MenuIcon />
							</IconButton>
						) : (
							<>
								<IconButton
									sx={{ borderRadius: "10px" }}
									color="inherit"
									onClick={toggleCart}
								>
									<Badge badgeContent={cartItems.length} color="secondary">
										<ShoppingCartOutlinedIcon color="action" />
									</Badge>

									<Typography
										variant="subtitle1"
										sx={{ ml: 1, fontWeight: "bold" }}
									>
										<FormattedPrice price={totalSum} />
									</Typography>
								</IconButton>
								<IconButton sx={{ borderRadius: "10px" }}>
									<FavoriteBorderOutlinedIcon color="action" />
									<Typography variant="body1" sx={{ ml: 0.5 }}>
										Закладки
									</Typography>
								</IconButton>
								<IconButton sx={{ borderRadius: "10px" }}>
									<AccountCircleOutlinedIcon />
									<Typography variant="body1" sx={{ ml: 0.5 }}>
										Профиль
									</Typography>
								</IconButton>
							</>
						)}
					</Box>
				</Toolbar>
			</AppBar>

			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleMenuClose}
			>
				<MenuItem
					color="inherit"
					onClick={() => {
						handleMenuClose()
						toggleCart()
					}}
				>
					<Badge
						badgeContent={cartItems.length}
						sx={{ ml: 0.3 }}
						color="secondary"
					>
						<ShoppingCartOutlinedIcon />
					</Badge>
					<Typography variant="subtitle1" sx={{ ml: 2.5, fontWeight: "bold" }}>
						<FormattedPrice price={totalSum} />
					</Typography>
				</MenuItem>

				<MenuItem onClick={handleMenuClose}>
					<FavoriteBorderOutlinedIcon />
					<Typography sx={{ ml: 1 }}>Закладки</Typography>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<AccountCircleOutlinedIcon />
					<Typography sx={{ ml: 1 }}>Профиль</Typography>
				</MenuItem>
			</Menu>

			<Cart
				isOpen={isCartOpen}
				onClose={toggleCart}
				items={cartItems}
				onItemRemove={handleRemoveItem}
				onOrderPlaced={handleOrderPlaced}
			/>
		</>
	)
}

export default Header
