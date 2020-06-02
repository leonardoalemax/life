import React from "react";
import styled from "styled-components";

export interface ICell {
	isAlive: boolean;
}

const FooterStyled = styled.div`
	a {
		color: rgb(3, 244, 244);
	}

	a:hover {
		color: rgb(244, 3, 244);
	}

	p {
		color: rgb(3, 244, 244);
		font-weight: 200;
		font-size: 8px;
		margin-top: 42px;
		padding: 8px 0px;
		text-align: center;
	}
`;

const Footer: React.FunctionComponent = () => {
	return (
		<FooterStyled>
			<p>
				{" "}
				see the code on{" "}
				<a href='https://github.com/leonardoalemax/life'>github</a>{" "}
			</p>
		</FooterStyled>
	);
};

export default Footer;
