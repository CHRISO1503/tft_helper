import express from "express";
import cors from "cors";
import axios from "axios";

const PORT = 4000;
const app = express();
app.use(cors());
const RIOT_API_KEY = "RGAPI-26e261e4-6b8f-4344-bc5b-b1b2b78a9996";

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
