import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EnterUser() {
    const REGIONS = [
        { region: "BR", route: "BR1" },
        { region: "EUNE", route: "EUN1" },
        { region: "EUW", route: "EUW1" },
        { region: "LAN", route: "LA1" },
        { region: "LAS", route: "LA2" },
        { region: "NA", route: "NA1" },
        { region: "OCE", route: "OC1" },
        { region: "RU", route: "RU" },
        { region: "TR", route: "TR1" },
        { region: "JP", route: "JP1" },
        { region: "KR", route: "KR" },
        { region: "PH", route: "PH2" },
        { region: "SG", route: "SG2" },
        { region: "TW", route: "TW2" },
        { region: "TH", route: "TH2" },
        { region: "VN", route: "VN2" },
    ];
    const [summonerId, setSummonerId] = useState("");
    const [region, setRegion] = useState(REGIONS[0].route);
    const navigate = useNavigate();

    function findUser(e: FormEvent) {
        navigate(`/profile/?region=${region}&summonerId=${summonerId}`);
    }

    return (
        <form onSubmit={(e) => findUser(e)}>
            <select name="region" onChange={(e) => setRegion(e.target.value)}>
                {REGIONS.map((region, i) => (
                    <option key={i} value={region.route}>
                        {region.region}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Summoner name"
                name="summonerId"
                onChange={(e) => setSummonerId(e.target.value)}
            ></input>
            <input type="submit" />
        </form>
    );
}
