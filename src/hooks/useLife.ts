import React from "react";
import { random } from "../functions/seeds";
import * as Life from "../functions/life";
import { TStream, IRules } from "../interfaces";

const useLife = (height: number, width: number, speed: number) => {
	const [cicle, setCicle] = React.useState<number>(0);
	const [running, setRunning] = React.useState<boolean>(true);
	const [stream, setStream] = React.useState<TStream>(random(height, width));
	const [constitution, setConstitution] = React.useState<IRules>({
		overpopulation: true,
		loneliness: true,
		reproduction: true,
	});

	const step = React.useCallback(() => {
		setCicle((e) => (e += 1));
		setStream(Life.cicle(stream, height, width, constitution));
	}, [stream, height, width, constitution]);

	React.useEffect(() => {
		let timer = setTimeout(() => {
			if (running) step();
		}, speed);
		return () => {
			clearTimeout(timer);
		};
	}, [running, step, speed]);

	const setAlive = (y: number, x: number) => {
		const next = stream;
		next[y][x] = !next[y][x];
		setStream([...next]);
	};

	const toggle = () => {
		setRunning((e) => !e);
	};

	const legislate = (newRules: IRules) => {
		setConstitution((e) => ({ ...e, ...newRules }));
	};

	const seed = (stream?: TStream) => {
		setStream(stream || random(height, width));
	};

	return {
		cicle,
		stream,
		running,
		constitution,
		toggle,
		step,
		seed,
		legislate,
		setAlive,
	};
};

export default useLife;
