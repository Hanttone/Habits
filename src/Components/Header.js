import styled from 'styled-components/macro';

export default function Header({
	text,
	color,
	absolute,
	setPositionX,
	setPositionY,
}) {
	return (
		<HeaderStyled
			color={color}
			absolute={absolute}
			setPositionX={setPositionX}
			setPositionY={setPositionY}
		>
			{text}
		</HeaderStyled>
	);
}

const HeaderStyled = styled.h1`
	color: ${(props) => props.color};
	font-size: 2.5rem;
	font-family: Arial, Helvetica, sans-serif;
	position: ${(props) => props.absolute};
	top: ${(props) => props.setPositionY};
	left: ${(props) => props.setPositionX};
`;
