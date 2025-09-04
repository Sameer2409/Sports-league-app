import React from "react";
import { Search, X } from "lucide-react";

function SearchBar({ value, onChange, placeholder = "Search leagues..." }) {
	const handleClear = () => {
		onChange("");
	};

	return (
		<div className="flex-1 relative">
			<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
			<input
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="input-field pl-10 pr-10"
			/>
			{value && (
				<button
					onClick={handleClear}
					className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
				>
					<X className="w-4 h-4" />
				</button>
			)}
		</div>
	);
}

export default SearchBar;
