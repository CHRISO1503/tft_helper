import { ENDPOINT } from "./appSettings";

export async function getLeagueData() {
    const { region, summonerName } = regionAndSummonerName();
    try {
        const leagueData = await fetch(
            ENDPOINT.concat(
                `/league?region=${region}&summonerName=${summonerName}`
            )
        )
            .then((res) => res.json())
            .then((data) => data);
        return leagueData;
    } catch (err) {
        return console.log(err);
    }
}

function regionAndSummonerName() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return {
        region: urlParams.get("region") || "",
        summonerName: urlParams.get("summonerName") || "",
    };
}
