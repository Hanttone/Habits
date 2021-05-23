import styled from 'styled-components/macro';
import Header from '../Components/Header';
import Navigation from '../Components/Navigation';
import UserInput from '../Components/UserInput';
import Button from '../Components/Button';

export default function Start() {
	return (
		<Background>
			<HeaderBackground />
			<Header
				color='#6E473F'
				text='New Habits'
				absolute='absolute'
				setPositionY='6%'
			/>
			<ContentBackground>
				<UserInput placeholder='New habit to track' />
				<Button
					width='80%'
					text='Submit new habit'
				/>
			</ContentBackground>
			<Navigation />
		</Background>
	);
}

const Background = styled.main`
	background-color: #aa7a78;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100%;
`;

const ContentBackground = styled.section`
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 72vh;
	width: 100%;
	border-bottom-left-radius: 18px;
	border-bottom-right-radius: 18px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const HeaderBackground = styled.div`
	background-image: url('https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80');
	background-size: 160%;
	background-repeat: no-repeat;
	background-position: 33% 15%;
	height: 18vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	mix-blend-mode: screen;
`;
