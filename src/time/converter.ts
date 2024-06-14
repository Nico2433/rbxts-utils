// *---------- BASIC DECREMENTAL ----------* //

export const yearsToMonths = (years: number): number => {
	return years * 12;
};

export const monthsToWeeks = (months: number): number => {
	return months * 4.33;
};

export const weeksToDays = (weeks: number): number => {
	return weeks * 7;
};

export const daysToHours = (days: number): number => {
	return days * 24;
};

export const hoursToMinutes = (hours: number): number => {
	return hours * 60;
};

export const minutesToSeconds = (minutes: number): number => {
	return minutes * 60;
};

export const secondsToMs = (seconds: number): number => {
	return seconds * 1000;
};

// *---------- BASIC INCREMENTAL ----------* //

export const msToSeconds = (ms: number): number => {
	return ms / 1000;
};

export const secondsToMinutes = (seconds: number): number => {
	return seconds / 60;
};

export const minutesToHours = (minutes: number): number => {
	return minutes / 60;
};

export const hoursToDays = (hours: number): number => {
	return hours / 24;
};

export const daysToWeeks = (days: number): number => {
	return days / 7;
};

export const weeksToMonths = (weeks: number): number => {
	return weeks / 4.33;
};

export const monthsToYears = (months: number): number => {
	return months / 12;
};

// *---------- YEARS ----------* //

export const yearsToWeeks = (years: number): number => {
	const ms = yearsToMs(years);
	return msToWeeks(ms);
};

export const yearsToDays = (years: number): number => {
	return years * 365;
};

export const yearsToHours = (years: number): number => {
	const ms = yearsToMs(years);
	return msToHours(ms);
};

export const yearsToMinutes = (years: number): number => {
	const ms = yearsToMs(years);
	return msToMinutes(ms);
};

export const yearsToSeconds = (years: number): number => {
	const ms = yearsToMs(years);
	return msToSeconds(ms);
};

export const yearsToMs = (years: number): number => {
	const days = yearsToDays(years);
	return daysToMs(days);
};

// *---------- MONTHS ----------* //

export const monthsToDays = (months: number): number => {
	const ms = monthsToMs(months);
	return msToDays(ms);
};

export const monthsToHours = (months: number): number => {
	const ms = monthsToMs(months);
	return msToHours(ms);
};

export const monthsToMinutes = (months: number): number => {
	const ms = monthsToMs(months);
	return msToMinutes(ms);
};

export const monthsToSeconds = (months: number): number => {
	const ms = monthsToMs(months);
	return msToSeconds(ms);
};

export const monthsToMs = (months: number): number => {
	const weeks = monthsToWeeks(months);
	return weeksToMs(weeks);
};

// *---------- WEEKS ----------* //

export const weeksToYears = (weeks: number): number => {
	const ms = weeksToMs(weeks);
	return msToYears(ms);
};

export const weeksToHours = (weeks: number): number => {
	const ms = weeksToMs(weeks);
	return msToHours(ms);
};

export const weeksToMinutes = (weeks: number): number => {
	const ms = weeksToMs(weeks);
	return msToMinutes(ms);
};

export const weeksToSeconds = (weeks: number): number => {
	const ms = weeksToMs(weeks);
	return msToSeconds(ms);
};

export const weeksToMs = (weeks: number): number => {
	const days = weeksToDays(weeks);
	return daysToMs(days);
};

// *---------- DAYS ----------* //

export const daysToYears = (days: number): number => {
	return days / 365;
};

export const daysToMonths = (days: number): number => {
	const ms = daysToMs(days);
	return msToMonths(ms);
};

export const daysToMinutes = (days: number): number => {
	const ms = daysToMs(days);
	return msToMinutes(ms);
};

export const daysToSeconds = (days: number): number => {
	const ms = daysToMs(days);
	return msToSeconds(ms);
};

export const daysToMs = (days: number): number => {
	const hours = daysToHours(days);
	return hoursToMs(hours);
};

// *---------- HOURS ----------* //

export const hoursToYears = (hours: number): number => {
	const ms = hoursToMs(hours);
	return msToYears(ms);
};

export const hoursToMonths = (hours: number): number => {
	const ms = hoursToMs(hours);
	return msToMonths(ms);
};

export const hoursToWeeks = (hours: number): number => {
	const ms = hoursToMs(hours);
	return msToWeeks(ms);
};

export const hoursToSeconds = (hours: number): number => {
	const ms = hoursToMs(hours);
	return msToSeconds(ms);
};

export const hoursToMs = (hours: number): number => {
	const minutes = hoursToMinutes(hours);
	return minutesToMs(minutes);
};

// *---------- MINUTES ----------* //

export const minutesToYears = (minutes: number): number => {
	const ms = minutesToMs(minutes);
	return msToYears(ms);
};

export const minutesToMonths = (minutes: number): number => {
	const ms = minutesToMs(minutes);
	return msToMonths(ms);
};

export const minutesToWeeks = (minutes: number): number => {
	const ms = minutesToMs(minutes);
	return msToWeeks(ms);
};

export const minutesToDays = (minutes: number): number => {
	const ms = minutesToMs(minutes);
	return msToDays(ms);
};

export const minutesToMs = (minutes: number): number => {
	const seconds = minutesToSeconds(minutes);
	return secondsToMs(seconds);
};

// *---------- SECONDS ----------* //

export const secondsToYears = (seconds: number): number => {
	const ms = secondsToMs(seconds);
	return msToYears(ms);
};

export const secondsToMonths = (seconds: number): number => {
	const ms = secondsToMs(seconds);
	return msToMonths(ms);
};

export const secondsToWeeks = (seconds: number): number => {
	const ms = secondsToMs(seconds);
	return msToWeeks(ms);
};

export const secondsToDays = (seconds: number): number => {
	const ms = secondsToMs(seconds);
	return msToDays(ms);
};

export const secondsToHours = (seconds: number): number => {
	const ms = secondsToMs(seconds);
	return msToHours(ms);
};

// *---------- MS ----------* //

export const msToYears = (ms: number): number => {
	const days = msToDays(ms);
	return daysToYears(days);
};

export const msToMonths = (ms: number): number => {
	const weeks = msToWeeks(ms);
	return weeksToMonths(weeks);
};

export const msToWeeks = (ms: number): number => {
	const days = msToDays(ms);
	return daysToWeeks(days);
};

export const msToDays = (ms: number): number => {
	const hours = msToHours(ms);
	return hoursToDays(hours);
};

export const msToHours = (ms: number): number => {
	const minutes = msToMinutes(ms);
	return minutesToHours(minutes);
};

export const msToMinutes = (ms: number): number => {
	const seconds = msToSeconds(ms);
	return secondsToMinutes(seconds);
};
