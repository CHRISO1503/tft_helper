import fileAccess from "../../fileAccess.json";
import "./teamImages.css";

export default function TeamImages({
    champions,
}: {
    champions: { character_id: keyof typeof fileAccess.champions[0] }[];
}) {
    return (
        <div className="team-images">
            {champions
                .slice()
                .reverse()
                .map((champion, i) => (
                    <div className="champion" key={i}>
                        <img
                            className="champion-image"
                            src={`/champions${
                                fileAccess.champions[0][champion.character_id]
                            }`}
                        />
                    </div>
                ))}
        </div>
    );
}
