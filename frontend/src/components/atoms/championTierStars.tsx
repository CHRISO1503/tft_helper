import "./championTierStars.css";

export default function ChampionTierStars({
    starNumber,
    cost,
}: {
    starNumber: number;
    cost: number;
}) {
    let starsArray = [];
    for (let i = 0; i < starNumber; i++) {
        starsArray.push(<div key={i} className={`star tier${starNumber}`} />);
    }

    return <div className={`stars-container cost${cost}`}>{starsArray}</div>;
}
