export const match = (text: string, patterns: string | string[], excludePatterns?: string | string[]) => {
	const matched = matchPattern(text, patterns);
	if (excludePatterns) {
		const excluded = matchPattern(text, excludePatterns);
		if (excluded) return;
	}

	return matched;
};

export const matchAll = (text: string, patterns: string | string[], excludePatterns?: string | string[]) => {
	const matches: string[] = [];

	if (typeIs(patterns, "string")) {
		const callback = text.gmatch(patterns);
		const results = getAllGMatch(callback);

		for (const result of results) {
			if (excludePatterns) {
				const excluded = matchPattern(text, excludePatterns);
				if (excluded) continue;
			}

			matches.push(result);
		}
	} else {
		for (const pattern of patterns) {
			const callback = text.gmatch(pattern);
			const results = getAllGMatch(callback);

			for (const result of results) {
				if (excludePatterns) {
					const excluded = matchPattern(text, excludePatterns);
					if (excluded) continue;
				}

				matches.push(result);
			}
		}
	}

	return matches;
};

const getAllGMatch = (callback: IterableFunction<LuaTuple<(string | number)[]>>) => {
	const matches: string[] = [];

	let value;
	while ((value = callback()[0])) {
		if (typeIs(value, "string")) matches.push(value);
	}

	return matches;
};

const matchPattern = (text: string, patterns: string | string[]) => {
	if (typeIs(patterns, "string")) {
		const matched = text.match(patterns)[0];
		if (typeIs(matched, "string")) return matched;
	} else {
		for (const pattern of patterns) {
			const matched = text.match(pattern)[0];
			if (typeIs(matched, "string")) return matched;
		}
	}
};
