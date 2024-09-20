/** @format */

import React, { useState, useMemo } from "react"
import { Box, CircularProgress, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import ShoesCard from "../components/ShoesCard"
import { useTypedSelector } from "../redux/customHooks/useTypedSelector"
import { IShoes } from "../redux/types"
import SearchInput from "../components/SearchInput"

const Home: React.FC = () => {
	const shoes = useTypedSelector(state => state.shoesReducer.shoes)
	const loading = useTypedSelector(state => state.shoesReducer.loading)
	const error = useTypedSelector(state => state.shoesReducer.error)
	const [searchTerm, setSearchTerm] = useState("")

	const filteredShoes = useMemo(() => {
		return shoes.filter(shoe =>
			shoe.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
	}, [shoes, searchTerm])

	const handleSearchChange = (value: string) => {
		setSearchTerm(value)
	}

	if (loading) {
		return (
			<Box
				sx={{
					height: "80vh",
					display: "flex ",
					justifyContent: "center ",
				}}
			>
				<Typography variant="h4" display="flex" alignItems="center" gap={2}>
					<CircularProgress size={40} />
				</Typography>
			</Box>
		)
	}

	if (error) {
		return (
			<Box
				sx={{
					height: "80vh",
					display: "flex ",
					justifyContent: "center ",
				}}
			>
				<Typography variant="body1" color="error">
					{error}
				</Typography>
			</Box>
		)
	}

	return (
		<Container maxWidth="lg">
			<Box
				display={"flex"}
				flexWrap={"wrap"}
				justifyContent="space-between"
				alignItems="center"
				my={4}
			>
				<Typography variant="h5" component="h1" fontWeight={700} gutterBottom>
					Все кросовки
				</Typography>

				<SearchInput shoes={shoes} onSearchChange={handleSearchChange} />
			</Box>
			<Grid container spacing={3}>
				{filteredShoes.map((item: IShoes) => (
					<Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
						<ShoesCard {...item} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Home
