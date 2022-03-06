import styled from "styled-components";
// colors and fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';


export const Form = styled.form`
  display: flex;
  width: 85%;
  margin-left: 7.5%;
  flex-direction: column;
  margin-top: 8vh ;
  h3 {
    font-family: ${fonts.letter1};
    margin-top: 3vh;
    text-align: center;
    font-size: 18px;
    color: ${colors.gray};
  }
  label {
    display: flex;
    flex-direction: column;
    span {
      position: absolute;
      padding-top: 4vh;
      padding-left: 4%;
    }
  }
  label input {
    padding-top: 2vh;
    padding-left: 4.7%;
    font-size: 17px;
    letter-spacing: 0.5px;
    border-top: 1.5px solid ${colors.grayDark};
    border-left: 1.5px solid ${colors.grayDark};
    border-right: 1.5px solid ${colors.grayDark};
    border-bottom: 1.5px solid white;
    height: 15vh;
    margin-bottom: 2vh;
    background: ${colors.grayDark};
    transition: ease-in .3s;
    color: white;
    &::-webkit-input-placeholder{
      /* color: red; */
      font-size: 17px;
    }
    &:focus{
      transition: ease-in .3s;
      border: 1.5px solid white;
      outline: none;
    }
  }
  button {
    cursor: pointer;
    border: none;
    color: white;
    margin-top: 3vh;
    height: 10vh;
    border-radius: 20px;
    background: #009688;
    transition: ease-in .3s;
    &:hover{
      background: #ad21d8;
    }
  }
`

export const Title = styled.h2`
  margin: 4vh 0;
  text-align: center;
  font-family: ${fonts.letter2};
`