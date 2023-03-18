import tftData from "../../tftData.json";
import ChampionTierStars from "./championTierStars";
import "./teamImages.css";

type Champion = {
    tier: number;
    character_id: keyof typeof tftData.champions[0];
};

export default function TeamImages({ champions }: { champions: Champion[] }) {
    function championDisplay(champion: Champion, index: number) {
        // Show overflow tile if more than 9 champs total
        if (index == 8 && champions.length > 9) {
            return (
                <div className="champion-image-container overflow" key={index}>
                    +{champions.length - 8}
                </div>
            );
        }
        // Do not show more than 9 champs
        else if (index > 8) {
            return <div key={index}></div>;
        }
        // Standard champ
        else {
            return (
                <div className="champion-image-container" key={index}>
                    <img
                        className="champion-image"
                        src={`/champions${
                            tftData.champions[0][champion.character_id].path
                        }`}
                    />
                    <ChampionTierStars
                        starNumber={champion.tier}
                        cost={tftData.champions[0][champion.character_id].cost}
                    />
                </div>
            );
        }
    }

    return (
        <div className="team-images">
            {champions
                .slice()
                .reverse()
                .map((champion, i) => championDisplay(champion, i))}
        </div>
    );
}
