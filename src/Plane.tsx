import React from "react";
import useLife from "./useLife";
import "./Plane.css";

const Been: React.FunctionComponent<{
	isAlive: boolean;
	y: number;
	x: number;
	className: string;
	onClick: (y: number, x: number) => void;
}> = ({ isAlive, className, x, y, onClick }) => {
	return (
		<div
			className={`been ${isAlive ? "alive" : "dead"} ${className}`}
			onClick={() => {
				onClick(y, x);
			}}></div>
	);
};

const Plane: React.FunctionComponent = () => {
	const { height, width, stream, setAlive } = useLife();

	return (
		<div className='grid'>
			{[...new Array(height)].map((row, y) => (
				<div className='row' key={y}>
					{[...new Array(width)].map((item, x) => (
						<Been
							key={x}
							className={`${y} ${x}`}
							x={x}
							y={y}
							onClick={setAlive}
							isAlive={stream[y][x]}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default Plane;
