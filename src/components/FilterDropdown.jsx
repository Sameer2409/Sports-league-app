import React from "react";
import { Filter } from "lucide-react";

function FilterDropdown({
	options = [],
	value,
	onChange,
	placeholder = "All Sports",
}) {
	return (
		<div className="md:w-64 relative">
			<Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="input-field pl-10 appearance-none bg-white"
			>
				<option value="">{placeholder}</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}

export default FilterDropdown;
