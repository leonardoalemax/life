export const seed = (
	height: number,
	width: number,
	dna: (y: number, x: number) => boolean
): boolean[][] => {
	let stream: boolean[][] = new Array(height);
	for (var y = 0; y < height; y++) {
		stream[y] = new Array(width);
		for (var x = 0; x < width; x++) {
			stream[y][x] = dna(y, x);
		}
	}
	return stream;
};

export const random = (height: number, width: number) =>
	seed(height, width, () => Math.round(Math.random()) === 1);

export const clean = (height: number, width: number) =>
	seed(height, width, () => false);

export const full = (height: number, width: number) =>
	seed(height, width, () => true);
