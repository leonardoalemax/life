import { INeighborwood, TStream, IRules } from "../interfaces";

export const neighborwood = (
	stream: boolean[][],
	y: number,
	x: number,
	height: number,
	width: number
): INeighborwood => {
	let count = 0;

	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			const row = (y + i + height) % height;
			const col = (x + j + width) % width;
			if (stream[row][col]) count += 1;
		}
	}

	if (stream[y][x]) count -= 1;
	return {
		alive: count,
	};
};

export const cicle = (
	last: TStream,
	height: number,
	width: number,
	constitution: IRules
): TStream => {
	return last.map((row, y) => {
		return row.map((col, x) => {
			const state = last[y][x];
			const neighbors = neighborwood(last, y, x, height, width).alive;
			if (!state && neighbors === 3 && constitution.reproduction) {
				return true;
			} else if (state && neighbors < 2 && constitution.loneliness) {
				return false;
			} else if (state && neighbors > 3 && constitution.overpopulation) {
				return false;
			} else {
				return state;
			}
		});
	});
};
