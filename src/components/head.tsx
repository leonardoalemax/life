import React from "react";
import styled from "styled-components";
import Rule from "./rule";
import { IRules } from "../interfaces";

export interface ICell {
	isAlive: boolean;
}

const HeadStyled = styled.div`
	a,
	h3,
	p,
	li {
		color: rgb(3, 244, 244);
	}

	a:hover,
	li:hover {
		color: rgb(244, 3, 244);
	}

	h3 {
		font-weight: 600;
		text-align: center;
		padding: 0px;
		margin: 16px;
	}
	p,
	li {
		font-weight: 200;
		font-size: 12px;
		margin: 0px 8px;
		padding: 8px 0px;
	}

	p {
		text-align: center;
	}

	li {
		cursor: pointer;
	}
`;

const Head: React.FunctionComponent<{
	constitution: IRules;
	legislate: (newRules: IRules) => void;
}> = ({ constitution, legislate }) => {
	return (
		<HeadStyled>
			<h3>{"</>"}</h3>
			<h3>Game of Life</h3>
			<p>
				This is my implementation of
				<a
					href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjn9NS4keTpAhW5IrkGHfjiC_MQFjAAegQIAhAB&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FJohn_Conway&usg=AOvVaw2oQn32WW7cX9qMrdlHXIm_'
					// eslint-disable-next-line react/jsx-no-target-blank
					target='_blank'>
					John Conway's
				</a>
				{" game of life."}
			</p>
			<p>Each step runs a set of 3 simple rules: </p>

			<ul>
				<Rule
					onClick={() => {
						legislate({ loneliness: !constitution.loneliness });
					}}
					active={constitution.loneliness}>
					Any live cell with fewer than two live neighbours dies, as if by
					underpopulation.
				</Rule>
				<Rule
					onClick={() => {
						legislate({ overpopulation: !constitution.overpopulation });
					}}
					active={constitution.overpopulation}>
					Any live cell with more than three live neighbours dies, as if by
					overpopulation.
				</Rule>
				<Rule
					onClick={() => {
						legislate({ reproduction: !constitution.reproduction });
					}}
					active={constitution.reproduction}>
					Any dead cell with exactly three live neighbours becomes a live cell,
					as if by reproduction.
				</Rule>
			</ul>
		</HeadStyled>
	);
};

export default Head;
