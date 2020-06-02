import React from "react";
import styled from "styled-components";
import Cell from "./cell";
import { TStream } from "../interfaces";

const GridStyled = styled.div`
	.row {
		display: flex;
		justify-content: center;
	}
`;

const Grid: React.FunctionComponent<{
	stream: TStream;
	height: number;
	width: number;
	setAlive: (y: number, x: number) => void;
}> = ({ stream, setAlive, height, width }) => {
	return (
		<GridStyled>
			{[...new Array(height)].map((row, y) => (
				<div className='row' key={y}>
					{[...new Array(width)].map((item, x) => (
						<Cell
							key={x}
							x={x}
							y={y}
							onClick={setAlive}
							isAlive={stream[y][x]}
						/>
					))}
				</div>
			))}
		</GridStyled>
	);
};

export default Grid;
