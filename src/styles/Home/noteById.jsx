import styled from 'styled-components';
// fonts
import fonts from '../tools/fonts.json'; 

export const Styles = styled.div`
  margin: 0 8%;
  margin-top: 12vh;
  h3 {
    font-family: ${fonts.letter2};
    font-size: 25px;
    margin-bottom: 4vh;
  }
  h4 {
    font-size: 20px;
    font-family: ${fonts.letter4};
    margin-left: 2%;
  }
  @media screen and (max-width: 550px) {
    margin: 0 5%;
    margin-top: 15vh;
  }
`