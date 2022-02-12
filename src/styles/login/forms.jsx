import styled from 'styled-components';
// icons and Fonts
import colors from '../tools/colors.json';
import fonts from '../tools/fonts.json';;


export const FormsStyles = styled.form`
  margin-top: 3vh;
  padding: 0 30%;
  .passwd {
    position: relative;
  }
  .passwd .icon {
    position: absolute;
    top: 5.8vh;
    right: 15px;
    font-size: 24px;
  }
  button {
    border: none;
    font-size: 18px;
    color: white;
    background: #009688;
    cursor: pointer;
    border-radius: 12px;
    height: 12vh;
    margin-top: 6vh;
    width: 100%;
    transition: ease-in-out .3s;
    &:hover {
      background: #f01ad3;
    }
  }
  h3 {
    font-weight: 20;
    font-family: ${fonts.letter4};
    margin-top: 2vh;
    text-align: center;
  }
  @media screen and (max-width: 900px) {
    padding: 0 20%;
  }
  @media screen and (max-width: 670px) {
    padding: 0 10%;
  }
  @media screen and (max-width: 420px) {
    padding: 0 5%;
  }
`

export const Input = styled.input`
  background: ${colors.blueDark};
  width: 95%;
  font-size: 15px;
  font-family: ${fonts.letter4};
  letter-spacing: .5px;
  margin-top: 2vh;
  height: 12vh;
  border: none;
  color: white;
  padding-left: 5%;
  border-radius: 15px;
  border: 1px solid ${colors.blueDark};
  &:focus {
    border: 1px solid white;
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: #a3a3a3;
  }
`
