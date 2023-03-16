import "./league.css";

export default function League({ leagueData }: { leagueData: any }) {
    return (
        <div className="league">
            {leagueData ? (
                <>
                    <div className="league-title">
                        {leagueData.summonerName}
                    </div>
                    <div className="league-info">
                        <p>Rank: </p>
                        <p>
                            {`${
                                leagueData.tier === "PROVISIONAL"
                                    ? "NaN"
                                    : leagueData.tier.substring(0, 3)
                            } ${leagueData.rank === null ? "" : leagueData.rank}
                            ${leagueData.leaguePoints}`}
                            LP
                        </p>
                    </div>
                    <div className="league-info">
                        <p>Winrate:</p>
                        <p>
                            {Math.round(
                                (leagueData.wins /
                                    (leagueData.wins + leagueData.losses)) *
                                    1000
                            ) / 10}
                            %
                        </p>
                    </div>
                    <div className="league-info">
                        <p>Games played: </p>
                        <p>{leagueData.wins + leagueData.losses}</p>
                    </div>
                </>
            ) : (
                <div>Loading profile...</div>
            )}
        </div>
    );
}
