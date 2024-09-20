/** @format */

import { useEffect } from "react"
import { useTypedDispatch } from "./redux/customHooks/useTypedDispatch"
import Home from "./pages/Home"
import Header from "./components/Header"
import { Container, Divider } from "@mui/material"
import "./App.css"
export default function App() {
	const { getShoes } = useTypedDispatch()

	useEffect(() => {
		getShoes()
	}, [])

	return (
		<div className="App">
			<Container
				sx={{
					background: "#fff",
					borderRadius: "10px",
					maxWidth: "1080px",
					w: "100%",
					pb: "100px",
				}}
			>
				<Header />
				<Divider />
				<Home />
			</Container>
		</div>
	)
}
