import { useEffect, useState } from "react";
import { ENDPOINT } from "./appSettings";

export default function Profile() {
    const [summonerName, setSummonerName] = useState("");
    const [region, setRegion] = useState("");

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        setRegion(urlParams.get("region") || "");
        setSummonerName(urlParams.get("summonerName") || "");
    }, []);

    useEffect(() => {
        if (region != "" && summonerName != "") {
            getProfileData();
        }
    }, [region, summonerName]);

    async function getProfileData() {
        console.log(region, summonerName);
        await fetch(
            ENDPOINT.concat(
                `/match-history?region=${region}&summonerName=${summonerName}`
            )
        )
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    return <div>profile</div>;
}
