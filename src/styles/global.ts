import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root{
		--background: #141414;
		--white: #fff;
		--red: #ff0000;
		--text-link: #79736d;
	}

	*{
		@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;500&family=Roboto:wght@300;400;500;700&display=swap');
    border: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
		text-decoration: none;
		color: var(--white);
  }

	body{
		background: var(--background);
	}
`;