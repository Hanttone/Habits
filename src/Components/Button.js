import styled from 'styled-components/macro';

export default function Button({
	width,
	text,
	onUserClick,
}) {
	return (
		<ButtonStyled
			onClick={onUserClick}
			width={width}
		>
			{text}
		</ButtonStyled>
	);
}

const ButtonStyled = styled.button`
	width: ${(props) => props.width};
	height: 7vh;
	background-color: #aa7a78;
	font-size: 1.56rem;
	border-radius: 18px;
	color: white;
	border: none;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
