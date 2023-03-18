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

export async function getMatchHistory(start: number) {
    const { region, summonerName } = regionAndSummonerName();
    try {
        const matchHistory = await fetch(
            ENDPOINT.concat(
                `/match-history?region=${region}&summonerName=${summonerName}&start=${start}`
            )
        )
            .then((res) => res.json())
            .then((data) => data);
        console.log(matchHistory);
        return matchHistory;
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
