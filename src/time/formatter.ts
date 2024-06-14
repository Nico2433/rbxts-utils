import { msToDays, msToHours, msToMinutes, msToSeconds } from "./converter";

export const formatTime = (ms: number, format: string) => {
	const hasSeconds = format.match("[sS]+")[0];
	const hasMinutes = format.match("[mM]+")[0];
	const hasHours = format.match("[hH]+")[0];
	const hasDays = format.match("[dD]+")[0];
	if (!hasSeconds && !hasMinutes && !hasHours && !hasDays) error("At least one time format is needed");

	const totalSeconds = math.floor(msToSeconds(ms));
	const totalMinutes = math.floor(msToMinutes(ms));
	const totalHours = math.floor(msToHours(ms));
	const totalDays = math.floor(msToDays(ms));

	const remainingSeconds = totalSeconds % 60;
	const remainingMinutes = totalMinutes % 60;
	const remainingHours = totalHours % 24;
	const remainingDays = totalDays;

	const formatPattern = "%02d";

	const formattedSeconds = string.format(formatPattern, remainingSeconds);
	const formattedMinutes = string.format(formatPattern, remainingMinutes);
	const formattedHours = string.format(formatPattern, remainingHours);
	const formattedDays = string.format(formatPattern, remainingDays);

	let formattedTime = format;

	if (hasDays) formattedTime = formattedTime.gsub("[dD]+", formattedDays)[0];
	if (hasHours) formattedTime = formattedTime.gsub("[hH]+", formattedHours)[0];
	if (hasMinutes) formattedTime = formattedTime.gsub("[mM]+", formattedMinutes)[0];
	if (hasSeconds) formattedTime = formattedTime.gsub("[sS]+", formattedSeconds)[0];

	return formattedTime;
};
