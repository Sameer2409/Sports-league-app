import React, { useEffect } from "react";
import { Trophy } from "lucide-react";
import DisplayCard from "./DisplayCard";

function LeagueGrid({ leagues = [], onLeagueClick }) {
	if (leagues.length === 0) {
		return (
			<div className="text-center py-16">
				<Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
				<h3 className="text-xl font-semibold text-gray-600 mb-2">
					No leagues found
				</h3>
				<p className="text-gray-500">
					Try adjusting your search or filter criteria
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{leagues.map((league) => (
				<DisplayCard
					key={league.idLeague}
					league={league}
					onClick={onLeagueClick}
				/>
			))}
		</div>
	);
}

export default LeagueGrid;
