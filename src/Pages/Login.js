import styled from 'styled-components/macro';
import Button from '../Components/Button';
import Header from '../Components/Header';
import UserInput from '../Components/UserInput';

export default function Login() {
	return (
		<ContentBackground>
			<Header
				color='white'
				text='Habits Tracker'
			/>
			<LoginGrouped>
				<LoginStyled>
					<UserInput
						placeHolder='Username'
						type='text'
					/>
					<UserInput
						placeHolder='Password'
						type='password'
					/>
				</LoginStyled>
				<LoginStyled>
					<Button text='Login' width='60%' />
					<Button text='Sign Up' width='60%' />
				</LoginStyled>
			</LoginGrouped>
		</ContentBackground>
	);
}

const ContentBackground = styled.main`
	background-image: url('https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80');
	background-size: 160%;
	background-repeat: no-repeat;
	background-position: 33% 75%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 10vh;
	padding-bottom: 5vh;
	align-items: center;
	height: 100vh;
	width: 100%;
`;

const LoginStyled = styled.div`
	height: 15vh;
	width: 100%;
	display: flex;
	gap: 0.5rem;
	flex-direction: column;
	align-items: center;
`;

const LoginGrouped = styled.section`
	height: 40vh;
	width: 100%;
	display: flex;
	gap: 1.5rem;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
`;
