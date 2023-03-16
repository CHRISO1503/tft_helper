export function getDateFromUnix(timestamp: number) {
    const unix = new Date(timestamp);
    const date = unix.getDate() < 10 ? "0" + unix.getDate() : unix.getDate();
    const month =
        unix.getMonth() < 10 ? "0" + unix.getMonth() : unix.getMonth();
    const hours = unix.getHours();
    const minutes = unix.getMinutes();
    return { date: date + "/" + month, time: hours + ":" + minutes };
}
