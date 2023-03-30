import express from "express";
import cors from "cors";
import axios from "axios";

require("dotenv").config();
const PORT = 4000;
const app = express();
app.use(cors());
const RIOT_API_KEY = process.env.RIOT_API_KEY;

// Parameters: region, summonerName
app.get("/league", async (req, res) => {
    const summoner = await getSummoner(
        req.query.region as string,
        req.query.summonerName as string
    );

    const riotResponse = await axios
        .get(
            `https://${req.query.region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${summoner.id}?api_key=${RIOT_API_KEY}`
        )
        .then((res) => res.data)
        .catch((err) => console.log(err));
    if (riotResponse.length > 0) {
        res.status(200).json(riotResponse[0]);
    } else {
        res.status(200).json({
            leagueId: null,
            queueType: "RANKED_TFT",
            tier: "PROVISIONAL",
            rank: null,
            summonerId: summoner.id,
            summonerName: summoner.name,
            leaguePoints: 0,
            wins: 0,
            losses: 0,
            veteran: false,
            inactive: false,
            freshBlood: false,
            hotStreak: false,
        });
    }
});

// Parameters: region, summonerName, start
app.get("/match-history", async (req, res) => {
    const region = req.query.region as string;
    const summoner = await getSummoner(
        region,
        req.query.summonerName as string
    );
    const matchIds = await getMatchIds(
        summoner,
        region,
        parseInt(req.query.start as string)
    );
    let matchHistory = [];
    for (let i = 0; i < matchIds.length; i++) {
        try {
            let match = await axios
                .get(
                    `https://${simpleRegion(
                        region
                    )}.api.riotgames.com/tft/match/v1/matches/${
                        matchIds[i]
                    }?api_key=${RIOT_API_KEY}`
                )
                .then((res) => res.data)
                .catch((err) => console.log(err));
            let playerNumber = 0;
            for (let j = 0; j < 8; j++) {
                if (match.metadata.participants[j] == summoner.puuid) {
                    playerNumber = j;
                }
            }
            match.info.playerNumber = playerNumber;
            matchHistory.push(match);
        } catch (err) {
            console.log(err);
        }
    }
    res.status(200).json(matchHistory);
});

async function getSummoner(region?: string, summonerName?: string) {
    try {
        const res = await axios.get(
            `https://${region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}?api_key=${RIOT_API_KEY}`
        );
        return res.data;
    } catch (err) {
        return console.log(err);
    }
}

async function getMatchIds(summoner: any, region: string, start: number) {
    try {
        const res = await axios.get(
            `https://${simpleRegion(
                region
            )}.api.riotgames.com/tft/match/v1/matches/by-puuid/${
                summoner.puuid
            }/ids?start=${start}&count=10&api_key=${RIOT_API_KEY}`
        );
        return res.data;
    } catch (err) {
        return console.log(err);
    }
}

function simpleRegion(region: string) {
    switch (region) {
        case "NA1":
        case "BR1":
        case "LA1":
        case "LA2":
        case "LAS":
            return "AMERICAS";
        case "KR":
        case "JP1":
        case "PH2":
        case "SG2":
        case "TH2":
        case "VN2":
            return "ASIA";
        case "EUN1":
        case "EUW1":
        case "TR1":
        case "RU":
            return "EUROPE";
        case "OC1":
            return "SEA";
    }
}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
