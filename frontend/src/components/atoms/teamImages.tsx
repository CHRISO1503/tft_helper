import fileAccess from "../../fileAccess.json";
import "./teamImages.css";

type Champion = { character_id: keyof typeof fileAccess.champions[0] };

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
                            fileAccess.champions[0][champion.character_id]
                        }`}
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
