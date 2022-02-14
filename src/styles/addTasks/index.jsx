import styled from 'styled-components';
// colors and fonts 
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';

export const Label = styled.label`
  /* background: green; */
  display: flex;
  flex-direction: column;
  span {
    top: 6vh;
    /* margin-top: 4vh; */
    left: 2%;
    position: relative;
  }
`
export const Form = styled.form`
  /* background: red; */
  padding-left: 7.5%;
  width: 85%;
  button {

    font-size: 18px;
    cursor: pointer;
    background: #009688;
    width: 85%;
    height: 10vh;
    border: none;
    color: white;
    margin-top: 4vh;
    margin-left: 7.5%;
    transition: ease .3s;
    &:hover {
      background: #e41c79;
    }
  }
`

export const Inputs = styled.input`
  height: 15vh;
  /* border: 1px solid ${colors.gray}; */
  border-bottom: 1.5px solid white;
  border-top: 1.5px solid ${colors.grayDark};
  border-left: 1.5px solid ${colors.grayDark};
  border-right: 1.5px solid ${colors.grayDark};
  margin-bottom: 1vh;
  padding-left: 2%;
  padding-top: 2vh;
  color: white;
  font-family: ${fonts.letter1};
  letter-spacing: .5px;
  transition: ease-in-out .3s ;
  font-size: 18px;
  background: ${colors.grayDark };
  &::-webkit-input-placeholder{
    /* color: red; */
    color: #c5c5c5;
    font-size: 18px;
    font-family: ${fonts.letter4};
  }
  &:focus{
    outline: white;
    transition: ease-in-out .3s ;
    border: 1.5px solid white;
  }
`

export const Title = styled.h2`
  color: white;
  font-family: ${fonts.letter2};
  margin: 4vh 0;
  text-align: center;
`

export const Mes = styled.h3` 
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3vh;
  text-align: center;
  @media screen and (min-width: 650px) {
    margin-top: 5vh;
    font-size: 17px;
  }
`