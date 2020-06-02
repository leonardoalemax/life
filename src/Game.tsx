import React from "react";
import useLife from "./hooks/useLife";
import Head from "./components/head";
import Grid from "./components/grid";
import Control from "./components/control";

const Game: React.FunctionComponent = () => {
	const height = 32;
	const width = 32;

	const {
		stream,
		cicle,
		running,
		constitution,
		setAlive,
		toggle,
		seed,
		step,
		legislate,
	} = useLife(height, width, 100);

	return (
		<div className='plane'>
			<Head legislate={legislate} constitution={constitution} />

			<Control
				height={height}
				width={width}
				cicle={cicle}
				toggle={toggle}
				seed={seed}
				step={step}
				running={running}
			/>

			<Grid
				height={height}
				width={width}
				setAlive={setAlive}
				stream={stream}></Grid>
		</div>
	);
};

export default Game;
