import React from "react";

const useLife = () => {
	const height = 18;
	const width = 18;

	const seed = () => {
		let stream: boolean[][] = new Array(height);
		for (var y = 0; y < height; y++) {
			stream[y] = new Array(width);
			for (var x = 0; x < width; x++) {
				stream[y][x] = Math.round(Math.random()) === 1;
			}
		}
		return stream;
	};

	const neighborwood = (stream: boolean[][], y: number, x: number): number => {
		let count = 0;

		for (let i = -1; i < 2; i++) {
			for (let j = -1; j < 2; j++) {
				const row = (y + i + height) % height;
				const col = (x + j + width) % width;
				if (stream[row][col]) count += 1;
			}
		}

		if (stream[y][x]) count -= 1;
		return count;
	};

	let [cicle, setCicle] = React.useState<number>(0);
	const [stream, setStream] = React.useState<boolean[][]>(seed());

	const rules = React.useCallback(() => {
		setCicle((e) => (e += 1));
		let next: boolean[][] = new Array(height);
		stream.forEach((row, y) => {
			next[y] = new Array(width);
			row.forEach((col, x) => {
				const state = stream[y][x];
				const neighbors = neighborwood(stream, y, x);

				if (!state && neighbors === 3) {
					next[y][x] = true;
				} else if (state && (neighbors < 2 || neighbors > 3)) {
					next[y][x] = false;
				} else {
					next[y][x] = stream[y][x];
				}
			});
		});
		setStream(next);
	}, [stream]);

	React.useEffect(() => {
		let timer = setTimeout(() => {
            rules();
        }, 100)
        return (()=> {
            clearTimeout(timer)
        });
	}, [cicle, rules]);


    const setAlive = (y:number, x:number) => {
        const next = stream;
        next[y][x] = true
        setStream([...next]);
    }

	return {
		cicle,
		stream,
		height,
        width,
        setAlive
	};
}

export default useLife;