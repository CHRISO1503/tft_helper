import { useEffect, useState } from "react";
import League from "./components/molecules/league";
import MatchHistory from "./components/molecules/matchHistory";
import { getLeagueData, getMatchHistory } from "./getUserData";
import "./profile.css";

export default function Profile() {
    const [leagueData, setLeagueData] = useState();
    const [matchHistory, setMatchHistory] = useState();

    useEffect(() => {
        const fetchLeagueData = async () =>
            setLeagueData(await getLeagueData());
        fetchLeagueData();
        const fetchMatchHistory = async () =>
            setMatchHistory(await getMatchHistory(0));
        fetchMatchHistory();
    }, []);

    return (
        <div className="profile-container">
            <League leagueData={leagueData} />
            <MatchHistory matchHistory={matchHistory} />
        </div>
    );
}
