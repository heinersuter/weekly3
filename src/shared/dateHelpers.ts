import {DayOfWeek} from "../week/model/DayOfWeek";

export function formatDate(date: Date): string {
    return date.toLocaleDateString('de-CH', {day: "2-digit", month: "2-digit", year: "numeric"});
}

export function formatDayOfWeek(date: Date): string {
    return date.toLocaleDateString('de-CH', {weekday: "long"});
}

export function isToday(date: Date): boolean {
    const today = new Date();
    return today.toDateString() === date.toDateString();
}

export function getCurrentWeekDates() :Date[] {
    const monday = getLastMonday();

    const dates = [new Date(monday)];
    for (let i = 1; i < 7; i++) {
        const nextDay = new Date(monday);
        nextDay.setDate(monday.getDate() + i);
        dates.push(nextDay);
    }
    return dates;
}

export function isBeforeCurrentWeek(date: Date): boolean {
    const monday = getLastMonday();
    return date < monday;
}

export function toDayOfWeek(dayOfWeek: number): DayOfWeek {
    switch (dayOfWeek) {
        case 1:
        default:
            return DayOfWeek.Monday;
        case 2:
            return DayOfWeek.Tuesday;
        case 3:
            return DayOfWeek.Wednesday;
        case 4:
            return DayOfWeek.Thursday;
        case 5:
            return DayOfWeek.Friday;
        case 6:
            return DayOfWeek.Saturday;
        case 0:
            return DayOfWeek.Sunday;
    }
}

function getLastMonday() :Date {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const difference =
        dayOfWeek >= 1
            ? dayOfWeek - 1
            : 6; // if today is Sunday, set difference to 6 to get last Monday
    return new Date(today.setDate(today.getDate() - difference));
}
