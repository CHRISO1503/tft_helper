import { useEffect, useState } from "react";

export default function League({ leagueData }: { leagueData: any }) {
    return (
        <>
            <p>
                {leagueData !== undefined
                    ? leagueData.tier.concat(` ${leagueData.rank || ""}`)
                    : "loading..."}
            </p>
        </>
    );
}
