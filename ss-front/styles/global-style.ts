import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
	${normalize}
	html,body {
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
	a {
		cursor: pointer;
		text-decoration: none;
	}
	* {
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
