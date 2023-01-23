import { useEffect, useState } from "react";
import { riotApiKey } from "./main";

export default function Profile() {
    const [summonerId, setSummonerId] = useState("");
    const [region, setRegion] = useState("");

    useEffect(() => {
        const url = window.location.href
            .substring(window.location.href.indexOf("?"))
            .concat("&");
        const regionVar = url.substring(url.indexOf("region"));
        const summonerIdVar = url.substring(url.indexOf("summonerId"));
        const parseVar = (s: string) => {
            return s.substring(s.indexOf("=") + 1, s.indexOf("&"));
        };
        setRegion(parseVar(regionVar));
        setSummonerId(parseVar(summonerIdVar));
    }, []);

    useEffect(() => {
        if (region != "" && summonerId != "") {
            getProfileData();
        }
    }, [region, summonerId]);

    async function getProfileData() {
        await fetch(
            `https://${region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?${riotApiKey}`
        ).then((res) => console.log(res));
    }

    return <div>profile</div>;
}
