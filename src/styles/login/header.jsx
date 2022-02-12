import styled from 'styled-components';
// colors and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';

export const HeaderStyles = styled.div`
  margin-top: 10vh;
  padding: 0 20%;
  text-align: center;
  h2 {
    font-size: 35px;
    color: white;
    font-family: ${fonts.letter2};
  }
  h3 {
    margin-top: 5vh;
    font-family: ${fonts.letter4};
    font-size: 20px;
    color: ${colors.gray};
    a {
      font-family: ${fonts.letter1};
      color: white;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0 5%;
    h2 {
      font-size: 23px;
    }
    h3 {
      margin-top: 2vh;
      font-size: 17px;
    }
  }
`