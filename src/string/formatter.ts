import { extraSpacesPattern, trimPattern, trimReplacePattern } from "./patterns";

export const capitalize = (text: string) => {
	const first = string.upper(string.sub(text, 1, 1));
	const rest = string.sub(text, 2, -1);
	return `${first}${rest}`;
};

export const trimString = (text: string) => {
	return text.gsub(trimPattern, trimReplacePattern)[0];
};

export const cleanString = (text: string) => {
	const trimmedText = trimString(text);
	return trimmedText.gsub(extraSpacesPattern, " ")[0];
};
