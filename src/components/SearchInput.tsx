/** @format */

import React from "react"
import { Search } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import Autocomplete from "@mui/material/Autocomplete"
import { IShoes } from "../redux/types"

interface SearchInputProps {
	shoes: IShoes[]
	onSearchChange: (value: string) => void
}

export default function SearchInput({
	shoes,
	onSearchChange,
}: SearchInputProps) {
	return (
		<Autocomplete
			sx={{ width: "300px" }}
			options={shoes}
			getOptionLabel={option => option.name}
			renderInput={params => (
				<TextField
					{...params}
					placeholder="Поиск..."
					InputProps={{
						...params.InputProps,
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
					}}
				/>
			)}
			onChange={(event, value) => onSearchChange(value ? value.name : "")}
			onInputChange={(event, value) => onSearchChange(value)}
		/>
	)
}
