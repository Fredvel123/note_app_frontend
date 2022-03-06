import styled from "styled-components";
// fonts & colors
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';
// icons
import { PlusCircleOutlined, SwapRightOutlined } from '@ant-design/icons';

export const UserStyled = styled.header`
  background: #009688;
  padding:5vh 5% ;
  display: flex;
  justify-content: space-between;
  .buttons {
    display: flex;
    align-items: center;
    justify-content:space-between ;
    width: 15%;
    a {
      font-family:${fonts.letter4} ;
      color: white;

    }
  }
  h4 {
    font-family: Arial, Helvetica, sans-serif ;
    font-size: 25px;
  }
  /* @media screen and (max-width: 750px){
    .buttons {
      width: 25%;
    }
  } */
  @media screen and (max-width: 400px){
    .buttons {
      width: 25%;
    }
  }
`

export const AddTaskButton = styled(PlusCircleOutlined)`
  color : white;
  font-size: 20px;
`

export const LogOutIcon = styled(SwapRightOutlined)`
  color : white;
  font-size: 25px;
`

export const LogOutButton = styled.button`
  background: transparent;
  color: white;
  font-family: ${fonts.letter4};
  border: none;
`