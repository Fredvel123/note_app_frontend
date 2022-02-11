import styled from "styled-components";
// icons
import { CloseOutlined } from '@ant-design/icons';
// fonts & colors
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';

export const ResponseStyles = styled.div`
  right: 25%;
  top: 15vh;
  width: 50%;
  height: 75vh;
  font-family: ${fonts.letter4};
  position: fixed;
  background: ${colors.blueDark};
  display: ${({state}) => state ? 'flex' : 'none' };
  justify-content: center;
  align-items: center;
  opacity: ${({state}) => state ? '1': '0'};
  @media screen and (max-width: 610px) {
    /* padding: 0 10%; */
    right: 10%;
    width: 80%;
    text-align: center;
    font-size: 12px;
  }
`

export const Icons = styled(CloseOutlined)` 
  top: 5vh;
  cursor: pointer;
  right: 5%;
  font-size: 25px;
  position: absolute;
  transition: .3s ;
  &:hover {
    color: white;
    transform: scale(1.3);
  }
`