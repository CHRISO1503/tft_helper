import { getDateFromUnix } from "./matchHistory.hooks";
import "./matchHistory.css";

export default function matchHistory({ matchHistory }: { matchHistory: any }) {
    console.log(matchHistory);
    return (
        <div className="matchHistory">
            {matchHistory ? (
                matchHistory.map((match: any, i: number) => (
                    <div className="match" key={i}>
                        <div className="date">
                            {getDateFromUnix(match.info.game_datetime).date}
                        </div>
                        <div className="time">
                            {getDateFromUnix(match.info.game_datetime).time}
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading match history...</div>
            )}
        </div>
    );
}
