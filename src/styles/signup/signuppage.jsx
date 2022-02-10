import styled from "styled-components";
// icons and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';


export const Inputs = styled.div`
  padding: 0 8%;
  padding-top: 12vh;
  .header {
    .capitalize {
      font-family: ${fonts.letter2};
    }
    h3 {
      font-family: ${fonts.letter4};
      font-size: 15px;
      a {
        color: #5672f1;
      }
    }
    h2 {
      margin: 3vh 0;
      font-family: ${fonts.letter3} ;
      font-size: 40px;
      font-weight: 300;
      color: white;
    }
  }
`