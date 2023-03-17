import { getDateFromUnix } from "./matchHistory.hooks";
import "./matchHistory.css";
import TeamImages from "../atoms/teamImages";

export default function matchHistory({ matchHistory }: { matchHistory: any }) {
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
                        <TeamImages
                            champions={
                                match.info.participants[match.info.playerNumber]
                                    .units
                            }
                        />
                    </div>
                ))
            ) : (
                <div>Loading match history...</div>
            )}
        </div>
    );
}
