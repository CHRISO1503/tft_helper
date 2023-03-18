import { getDateFromUnix } from "./matchHistory.hooks";
import "./matchHistory.css";
import TeamImages from "../atoms/teamImages";

export default function matchHistory({ matchHistory }: { matchHistory: any }) {
    const placements = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];
    function matchPosition(placement: number) {
        if (placement == 1) return "top";
        else if (placement < 5) {
            return "win";
        } else {
            return "loss";
        }
    }

    return (
        <div className="matchHistory">
            {matchHistory ? (
                matchHistory.map((match: any, i: number) => (
                    <div
                        className={`match ${matchPosition(
                            match.info.participants[match.info.playerNumber]
                                .placement
                        )}`}
                        key={i}
                    >
                        <div className="date">
                            {getDateFromUnix(match.info.game_datetime).date}
                        </div>
                        <div className="placement">
                            {
                                placements[
                                    match.info.participants[
                                        match.info.playerNumber
                                    ].placement - 1
                                ]
                            }
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
