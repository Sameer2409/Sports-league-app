import React from "react";
import { Trophy } from "lucide-react";

function DisplayCard({ league, onClick }) {
	return (
		<div
			onClick={() => onClick(league)}
			className="card cursor-pointer transform hover:-translate-y-1 bg-white"
		>
			<div className="p-6">
				<div className="flex items-start justify-between mb-3">
					<Trophy className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
					<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full ml-2">
						{league.strSport}
					</span>
				</div>

				<h3 className="font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
					{league.strLeague}
				</h3>

				{league.strLeagueAlternate &&
					league.strLeagueAlternate !== league.strLeague && (
						<p className="text-sm text-gray-500 mb-3 line-clamp-2">
							Also: {league.strLeagueAlternate}
						</p>
					)}

				<div className="flex items-center text-blue-600 text-sm font-medium">
					<span>View Details</span>
					<svg
						className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default DisplayCard;
