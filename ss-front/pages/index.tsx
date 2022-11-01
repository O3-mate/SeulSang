import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
	return (
		<div>
			<Test>슬기로운 생활!</Test>
		</div>
	);
};

export default Home;

const Test = styled.h1`
	color: ${(props) => props.theme.color.main};
`;
