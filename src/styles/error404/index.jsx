import styled from 'styled-components';
// fonts
import fonts from '../tools/fonts.json';

export const ErrorStyles = styled.div`
  /* background: red; */
  padding: 5vh 5%;
  text-align:center ;
  h1 {
    margin: 5vh 0;
    font-size: 25px;
    font-family: ${fonts.letter4};
  }
  h3 { 
    margin:2vh 0;
    font-family:${fonts.letter4} ;
  }
  h3 a {
    color: gray;
  }
` 