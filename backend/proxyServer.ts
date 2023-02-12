import express from "express";
import cors from "cors";
import axios from "axios";

const PORT = 4000;
const app = express();
app.use(cors());
const RIOT_API_KEY = "RGAPI-26e261e4-6b8f-4344-bc5b-b1b2b78a9996";

// Req takes summonerId and region
app.get("/match-history", async (req, res) => {
    const summoner = await getSummoner(
        req.query.region?.toString(),
        req.query.summonerName?.toString()
    );

    const riotResponse = await axios
        .get(
            `https://${req.query.region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${summoner.id}?api_key=${RIOT_API_KEY}`
        )
        .then((res) => {
            return res.data;
        })
        .catch((err) => console.log(err));
    console.log(riotResponse[0]);
    res.status(200).json(riotResponse[0]);
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

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
