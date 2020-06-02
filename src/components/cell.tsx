import React from "react";
import styled from "styled-components";

export interface ICell {
	isAlive: boolean;
}

const CellStyle = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 8px;
	border: 2px solid #333;
	font-size: 8px;
	background-color: ${(props: ICell) =>
		props.isAlive ? "rgb(3,244,244)" : "#333"};

	&:hover {
		background-color: rgb(244, 3, 244);
	}
`;

const Cell: React.FunctionComponent<{
	isAlive: boolean;
	y: number;
	x: number;
	onClick: (y: number, x: number) => void;
}> = ({ isAlive, x, y, onClick }) => {
	return (
		<CellStyle
			isAlive={isAlive}
			onClick={() => {
				onClick(y, x);
			}}
		/>
	);
};

export default Cell;
