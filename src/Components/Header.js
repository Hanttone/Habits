import styled from 'styled-components/macro';

export default function Header({ text, color }) {
	return (
		<HeaderStyled color={color}>
			{text}
		</HeaderStyled>
	);
}

const HeaderStyled = styled.h1`
	color: ${(props) => props.color};
	font-size: 2.5rem;
	font-family: Arial, Helvetica, sans-serif;
`;
