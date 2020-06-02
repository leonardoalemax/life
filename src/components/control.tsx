import React from "react";
import styled from "styled-components";
import { clean } from "../functions/seeds";
import { TStream } from "../interfaces";

export interface ICell {
	isAlive: boolean;
}

const ControlStyled = styled.div`
	p {
		font-weight: 200;
		font-size: 12px;
		margin: 0px 8px;
		padding: 8px 0px;
		color: rgb(3, 244, 244);
		text-align: center;
	}

	.actions {
		display: flex;
		align-content: center;
		justify-content: center;
		padding: 8px 0px;
		button {
			color: rgb(3, 244, 244);
			font-family: "Fira Code", monospace;
			font-variant-ligatures: common-ligatures;
			background-color: transparent;
			border: none;
			cursor: pointer;
			&:hover {
				color: rgb(244, 3, 244);
			}
			&:active {
				outline: none;
				border: none;
			}

			&:focus {
				outline: 0;
			}
		}
	}
`;

const Control: React.FunctionComponent<{
	cicle: number;
	height: number;
	width: number;
	running: boolean;
	toggle: () => void;
	step: () => void;
	seed: (stream?: TStream | undefined) => void;
}> = ({ cicle, running, toggle, step, seed, height, width }) => {
	return (
		<ControlStyled>
			<p>the simulation already runned {cicle} steps.</p>
			<div className='actions'>
				<button onClick={toggle}>{running ? "||>" : "|>"}</button>
				<button
					onClick={() => {
						step();
					}}>
					{"-->"}
				</button>
				<button
					onClick={() => {
						seed();
					}}>
					{"<~>"}
				</button>
				<button
					onClick={() => {
						seed(clean(height, width));
					}}>
					{"< >"}
				</button>
			</div>
		</ControlStyled>
	);
};

export default Control;
