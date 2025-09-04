import React from "react";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

function Header({
	searchTerm,
	onSearchChange,
	selectedSport,
	onSportChange,
	sportsOptions,
}) {
	return (
		<header className="bg-white shadow-sm border-b">
			<div className="container mx-auto px-4 py-6">
				<div className="flex items-center justify-center mb-6">
					<h1 className="text-3xl font-bold text-gray-800">
						Sports Leagues Directory
					</h1>
				</div>
				<div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
					<SearchBar
						value={searchTerm}
						onChange={onSearchChange}
						placeholder="Search leagues by name..."
					/>
					<FilterDropdown
						options={sportsOptions}
						value={selectedSport}
						onChange={onSportChange}
						placeholder="All Sports"
					/>
				</div>
			</div>
		</header>
	);
}

export default Header;
