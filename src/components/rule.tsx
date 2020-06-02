import React from "react";

const Rule: React.FunctionComponent<{
	onClick: () => void;
	active?: boolean;
}> = ({ children, onClick, active }) => {
	return <li onClick={onClick}> {active ? children : <s>{children}</s>}</li>;
};

export default Rule;
