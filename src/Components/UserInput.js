import styled from 'styled-components/macro';

export default function UserInput({
	placeHolder,
	inputType,
}) {
	return (
		<InputStyled
			placeholder={placeHolder}
			type={inputType}
		></InputStyled>
	);
}

const InputStyled = styled.input`
	width: 80%;
	height: 7vh;
	border: none;
	border-radius: 18px;
	text-align: center;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
