import { useEffect, useState } from "react";
import { ENDPOINT } from "./appSettings";
import League from "./components/league";
import { getLeagueData } from "./getUserData";

export default function Profile() {
    const [leagueData, setLeagueData] = useState();

    useEffect(() => {
        const fetchLeagueData = async () =>
            setLeagueData(await getLeagueData());
        fetchLeagueData();
    }, []);

    return <League leagueData={leagueData} />;
}
