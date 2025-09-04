import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import LeagueGrid from "./components/LeagueGrid";
import Modal from "./components/Modal";
import { useLeaguesData } from "./hooks/useLeaguesData";
import { useSeasonBadge } from "./hooks/useSeasonBadge";

function App() {
	const { leagues } = useLeaguesData();
  const { badge, loadBadge } = useSeasonBadge();

	const [searchTerm, setSearchTerm] = useState("");
	const [selectedSport, setselectedSport] = useState("");
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSearchChange = (value) => {
		setSearchTerm(value);
	};

	const handleSportFilterChange = (value) => {
		setselectedSport(value);
	};

  const handleLeagueClick = (league) => {
    setSelectedLeague(league);
    setIsModalOpen(true);
    loadBadge(league.idLeague);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedLeague(null);
  };

  const uniqueSports = useMemo(() => {
    const sports = [...new Set(leagues.map(league => league.strSport).filter(Boolean))];
    return sports.sort();
  }, [leagues]);

  const filteredLeagues = useMemo(() => {
    return leagues.filter(league => {
      const matchesSearch = !searchTerm || 
        league.strLeague?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        league.strLeagueAlternate?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSport = !selectedSport || league.strSport === selectedSport;
      
      return matchesSearch && matchesSport;
    });
  }, [leagues, searchTerm, selectedSport]);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<Header
				searchTerm={searchTerm}
				onSearchChange={handleSearchChange}
				selectedSport={selectedSport}
				onSportChange={handleSportFilterChange}
        sportsOptions={uniqueSports}
			/>
			<main className="container mx-auto px-4 py-8">
				<LeagueGrid
					leagues={filteredLeagues}
					onLeagueClick={handleLeagueClick}
				/>
			</main>
      <Modal 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={selectedLeague?.strLeague || ''}
        league={selectedLeague}
        badge={badge}
      />
		</div>
	);
}

export default App;
