// *------- WITHOUT SPACES

export const aStr = (...text: (string | boolean | null | undefined)[]) => {
	let finalStr = "";

	for (const str of text) {
		if (typeIs(str, "string")) finalStr = `${finalStr}${str}`;
	}

	return finalStr;
};

// *------- WITH SPACES

export const aStrWS = (...text: (string | boolean | null | undefined)[]) => {
	let finalStr = "";

	for (const str of text) {
		if (typeIs(str, "string")) finalStr = `${finalStr} ${str}`;
	}

	return finalStr;
};
