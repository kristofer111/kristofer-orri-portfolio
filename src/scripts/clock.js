


export function updateClock() {
    const clock = document.querySelector("#clock-time");

    const now = new Date();

    const time = new Intl.DateTimeFormat("en-GB", {
        timeZone: "GMT",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    }).format(now);

    if (clock) {
        clock.textContent = time;
    }
}









