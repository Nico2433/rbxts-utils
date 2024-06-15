export const getRandomFromArray = <T>(array: T[], minPos: number = 0) => {
	const randomNumber = math.random(minPos, array.size() - 1);
	return array[randomNumber];
};
