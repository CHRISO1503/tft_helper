export function getDateFromUnix(timestamp: number) {
    const leadingZero = (number: number) =>
        number < 10 ? "0" + number : number;
    const unix = new Date(timestamp);
    const date = leadingZero(unix.getDate());
    const month = leadingZero(unix.getMonth() + 1);
    const hours = leadingZero(unix.getHours());
    const minutes = leadingZero(unix.getMinutes());
    return { date: date + "/" + month, time: hours + ":" + minutes };
}
